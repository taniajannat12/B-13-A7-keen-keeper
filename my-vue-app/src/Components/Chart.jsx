import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const Stats = () => {
    const data = [
        { name: 'Text', value: 40 },
        { name: 'Call', value: 30 },
        { name: 'Video', value: 30 },
    ];
    const COLORS = ['blue', 'green', 'yellow'];

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Friendship Analytics</h1>
            <PieChart width={400} height={400}>
                <Pie data={data} innerRadius={60} outerRadius={80} dataKey="value">
                    {data.map((entry, index) => <Cell key={index} fill={COLORS[index]} />)}
                </Pie>
                <Legend />
                <Tooltip />
            </PieChart>
        </div>
    );
};
export default Stats; 