import { findApplicantsByConnectionReqId } from '@/actions';
import { applicantColumns } from '@/components/applicantColumns';
import { DataTable } from '@/components/ui/data-table';
import React from 'react'

const page = async({params}: {params: Promise<{slug: string}>}) => {
    const slug = (await params).slug;

    const {applicants} = await findApplicantsByConnectionReqId(Number(slug));

    return (
        <div className='container mx-auto py-10'>
            <DataTable columns={applicantColumns} data={applicants} />
        </div>
    )
}

export default page