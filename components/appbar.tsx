'use client';

import Link from 'next/link';
import React from 'react'

const Appbar = () => {

    return (
        <div className='py-3 px-4 max-w-screen border-b border-b-slate-400'>
            <ul className="w-full flex gap-6 items-center justify-center">
                <Link href={'/'} className='text-white font-bold hover:text-blue-600'>
                    Home
                </Link>
                <Link href={'/records'} className='text-white font-bold hover:text-blue-600'>
                    Records
                </Link>
            </ul>
        </div>
    )
}

export default Appbar