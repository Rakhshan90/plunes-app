'use client';

import React, { useState } from 'react'
import { Input } from './ui/input';
import { Search } from 'lucide-react';

const SearchBox = ({onFilterChange}: {onFilterChange: (value: string)=> void}) => {

    const [inputVal, setInputVal] = useState<string>('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputVal(e.target.value);
        onFilterChange(inputVal);
    }
    return (
        <div className="flex items-center bg-slate-900 rounded-md">
            <Input value={inputVal} onChange={handleInputChange} className='w-full bg-slate-900 text-slate-300 border-none placeholder:text-slate-300 
            focus-visible:ring-0'
                placeholder='Search your employees by name and email...' />
            <Search className='bg-slate-900 text-slate-300 mr-2' /> 
        </div>
    )
}

export default SearchBox