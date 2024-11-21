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
                        name: true,
                        gender: true,
                    }
                }
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
            applicants: record.applicants.length, // Transform to number
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


// update connection details
type UpdateParams = {
    ownership: Ownership,
    category: Category,
    load: number,
    approvalDate: Date,
    modifiedDate: Date,
    status: Status,
    connectionReqId: number,
}
export const updateConnectionDetails = async ({ ownership, category, load, approvalDate, modifiedDate, status, connectionReqId }: UpdateParams) => {
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
                modifiedDate,
                load,
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


export const findApplicantsByConnectionReqId = async (connectionReqId: number)=>{
    try {
        const connectionReqDetails = await prisma.connectionRequest.findUnique({
            where: {id: connectionReqId},
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


export const findReviewDetails = async (connectionReqId: number)=>{
    try {
        const reviewDetails = await prisma.reviewConnectionRequest.findUnique({
            where: {id: connectionReqId}
        });

        const reviewer = await prisma.reviewer.findUnique({
            where: {id: reviewDetails?.reviewerId}
        });

        const reviewRecord = {...reviewer, ...reviewDetails};
        return {
            message: 'Review record has been found',
            reviewRecord: reviewRecord || {}
        };

    } catch (error) {
        return {
            message: 'Error while searching for review details, try again',
            reviewRecord: {}
        }
    }
}


