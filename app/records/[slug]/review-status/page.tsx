import { findReviewDetails } from '@/actions';
import { ReviewColumns } from '@/components/review-columns';
import { DataTable } from '@/components/ui/data-table';
import React from 'react'

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const slug = (await params).slug;
    const { reviewRecord } = await findReviewDetails(Number(slug));

    return (
        <div className='container mx-auto py-10'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Connection Request Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reviewer Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reviewer Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reviewer Comment
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b bg-gray-800 border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                                {reviewRecord?.connectionReqId}
                            </th>
                            <td className="px-6 py-4">
                                {reviewRecord?.reviewerId}
                            </td>
                            <td className="px-6 py-4">
                                {reviewRecord?.name}
                            </td>
                            <td className="px-6 py-4">
                                {reviewRecord?.reviewer_comments}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default page