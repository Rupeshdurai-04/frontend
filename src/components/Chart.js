import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    { name: 'Mon', uv: 800 },
    { name: 'Tue', uv: 130 },
    { name: 'Wed', uv: 250 },
    { name: 'Thu', uv: 600 },
    { name: 'Fri', uv: 150 },
    { name: 'Sat', uv: 845 },
    { name: 'Sun', uv: 130 },
];

const Chart = () => {
    return (
        <div className='graph'>
            <p>Latest Download</p>
            <LineChart width={600} height={160} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Chart;
