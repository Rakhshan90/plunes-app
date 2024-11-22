'use client';

import { fetchMonthlyApplicationRequests } from '@/actions';
import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
// const data = [
//     { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
//     { name: 'Feb', uv: 300, pv: 2400, amt: 2400 },
//     { name: 'Mar', uv: 300, pv: 2400, amt: 2400 },
//     { name: 'Apr', uv: 200, pv: 2400, amt: 2400 },
//     { name: 'May', uv: 100, pv: 2400, amt: 2400 },
//     { name: 'Jun', uv: 300, pv: 2400, amt: 2400 },
//     { name: 'Jul', uv: 500, pv: 2400, amt: 2400 },
//     { name: 'Aug', uv: 400, pv: 2400, amt: 2400 },
//     { name: 'Sep', uv: 300, pv: 2400, amt: 2400 },
//     { name: 'Oct', uv: 200, pv: 2400, amt: 2400 },
//     { name: 'Non', uv: 500, pv: 2400, amt: 2400 },
//     { name: 'Dec', uv: 1600, pv: 2400, amt: 2400 },
// ];

const ApplicationReqGraph = () => {

    const [data, setData] = useState<{
        name: string;
        uv: number;
    }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchMonthlyApplicationRequests();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default ApplicationReqGraph