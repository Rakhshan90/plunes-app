import React from 'react'

const page = async({params}: {params: Promise<{slug: string}>}) => {
    const slug = (await params).slug;

    return (
        <div className='text-white text-4xl'>{slug}</div>
    )
}

export default page