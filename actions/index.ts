'use server';

import prisma, { Category, Ownership, Status } from '@/db/index';


// find all the connection records
export const getConnectionRecords = async () => {
    try {
        const records = await prisma.connectionRequest.findMany({
            select: {
                id: true,
                ownership: true,
                category: true,
                load: true,
                applicationDate: true,
                status: true,
                approvalDate: true,
                modifiedDate: true,
                applicants: {
                    select: {
                        id: true,
                        name: true,
                        gender: true,
                    }
                },
                reviewerId: true,
                reviewer_name: true,
                reviewer_comments: true,
            }
        });

        // Transform the data to match the expected structure
        const transformedRecords = records.map((record) => ({
            id: record.id,
            ownership: record.ownership,
            category: record.category,
            load: record.load,
            applicationDate: record.applicationDate.toDateString(),
            status: record.status,
            approvalDate: record.approvalDate?.toDateString(),
            modifiedDate: record.modifiedDate?.toDateString(),
            applicantId: record.applicants.map((applicant)=> applicant.id),
            reviewerId: record.reviewerId,
            reviewer_comments: record.reviewer_comments,
            reviewer_name: record.reviewer_name
        }));

        return {
            message: 'Records have been found',
            records: transformedRecords || [],
        };

    } catch (error) {
        return {
            message: 'Error while searching for records, try again',
            records: [],
        }
    }
}


// find connection record based on the applicantId 
export const connectionRecordByApplicantId = async (applicantId: number) => {
    try {
        const connectionDetails = await prisma.applicant.findFirst({
            where: {
                id: applicantId,
            },
            select: {
                connectionRequests: {
                    select: {
                        ownership: true,
                        category: true,
                        load: true,
                        applicationDate: true,
                        status: true,
                        approvalDate: true,
                        modifiedDate: true,
                    }
                }
            }
        })
        return {
            message: 'Connection details have been found',
            connectionDetails: connectionDetails || [],
        }
    } catch (error) {
        return {
            message: 'Error while searching for records, try again',
            connectionDetails: [],
        }
    }
}


// find connection records via application date
export const connectionRecordsByApplicationDate = async (applicationDate: Date) => {
    try {
        const records = await prisma.connectionRequest.findMany({
            where: {
                applicationDate
            },
            select: {
                ownership: true,
                category: true,
                load: true,
                applicationDate: true,
                status: true,
                approvalDate: true,
                modifiedDate: true,
                applicants: {
                    select: {
                        name: true,
                        gender: true,
                    }
                }
            }
        });

        return {
            message: 'Records have been found',
            records: records || []
        }
    } catch (error) {
        return {
            message: 'Error while searching for records, try again',
            records: [],
        }
    }
}


// find single connection record details using connection req id
export const connectionDetails = async (connectionReqId: number) => {
    try {
        const connectionDetails = await prisma.connectionRequest.findUnique({
            where: {
                id: connectionReqId,
            },
            select: {
                ownership: true,
                category: true,
                load: true,
                applicationDate: true,
                status: true,
                approvalDate: true,
                modifiedDate: true,
                applicants: {
                    select: {
                        name: true,
                        gender: true,
                    }
                }
            }
        });

        return {
            message: 'Connection request details have been found',
            connectionDetails: connectionDetails || {},
        }
    } catch (error) {
        return {
            message: 'Error while searching for connection request details, try again',
            connectionDetails: {},
        }
    }
}


export const updateConnectionDetails = async ({ ownership, category, load, approvalDate, status, reviewerId, reviewer_comments, reviewer_name, connectionReqId }:
    { ownership: Ownership, category: Category, load: number, approvalDate: Date, status: Status, reviewerId: number, reviewer_comments: string, reviewer_name: string, connectionReqId: number }) => {
    try {
        await prisma.connectionRequest.update({
            where: {
                id: connectionReqId,
            },
            data: {
                ownership,
                category,
                status,
                approvalDate,
                load,
                reviewerId,
                reviewer_comments,
                reviewer_name,
            }
        });

        return {
            message: 'Connection application request details updated'
        }
    } catch (error) {
        return {
            message: 'Error while searching for connection request details, try again',
        }
    }
}


export const findApplicantsByConnectionReqId = async (connectionReqId: number) => {
    try {
        const connectionReqDetails = await prisma.connectionRequest.findUnique({
            where: { id: connectionReqId },
            select: {
                applicants: {
                    select: {
                        id: true,
                        name: true,
                        gender: true,
                        state: true,
                        district: true,
                        pincode: true,
                        governmentIdType: true,
                        governmentId: true,
                    }
                }
            }
        });

        // If no connection request found, handle gracefully
        if (!connectionReqDetails) {
            return {
                message: 'No connection request found for the given ID',
                applicants: [],
            };
        }

        const updatedApplicants = connectionReqDetails.applicants.map(applicant => ({
            id: applicant.id,
            name: applicant.name,
            gender: applicant.gender,
            state: applicant.state,
            district: applicant.district,
            pincode: applicant.pincode,
            governmentIdType: applicant.governmentIdType,
            governmentId: applicant.governmentId,
        }));

        return {
            message: 'Applicants have been found',
            applicants: updatedApplicants || [],
        }
    } catch (error) {
        return {
            message: 'Error while searching for applicants, try again',
            applicants: []
        }
    }
}


export async function fetchMonthlyApplicationRequests() {
    const requests = await prisma.connectionRequest.groupBy({
        by: ['applicationDate'],
        _count: {
            id: true, // Count the number of requests
        },
    });

    // Format the result to group by month
    const monthlyData = requests.reduce((acc, request) => {
        const month = new Date(request.applicationDate).toLocaleString('default', { month: 'short' });
        if (!acc[month]) {
            acc[month] = 0;
        }
        acc[month] += request._count.id;
        return acc;
    }, {} as Record<string, number>);

    // Convert to an array format compatible with the graph
    return Object.entries(monthlyData).map(([month, count]) => ({
        name: month,
        uv: count,
    }));
}

