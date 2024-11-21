'use client';

import React, { useState } from 'react'
import SearchBox from './searchBox'

const RecordsData = () => {

    const [filter, setFilter] = useState<string>('');
    const filterHanlder = (value: string) => {
        setFilter(value);
    }

    return (
        <div className='w-full'>
            <SearchBox onFilterChange={filterHanlder} />
        </div>
    )
}

export default RecordsData