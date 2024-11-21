import UpdateConnection from '@/components/update-connection';
import React from 'react'

const page = async({params}: {params: Promise<{slug: string}>}) => {
    const slug = (await params).slug;

    return (
        <div className='container mx-auto py-10'>
            <UpdateConnection slug={Number(slug)} />
        </div>
    )
}

export default page