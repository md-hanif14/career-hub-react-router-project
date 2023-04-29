import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';

const Stat = () => {

    const assignments = [
        { name: 'assignment-1', assignmentNumber: 'one', marks: 57 },
        { name: 'assignment-2', assignmentNumber: 'two', marks: 58 },
        { name: 'assignment-3', assignmentNumber: 'three', marks: 60 },
        { name: 'assignment-4', assignmentNumber: 'four', marks: 57 },
        { name: 'assignment-5', assignmentNumber: 'five', marks: 60 },
        { name: 'assignment-6', assignmentNumber: 'six', marks: 52 },
        { name: 'assignment-7', assignmentNumber: 'seven', marks: 59 },
        { name: 'assignment-8', assignmentNumber: 'eight', marks: 58 }
    ];

    return (
        <div>
            <h1>Assignment marks chart</h1>
            <div>
                <AreaChart
                    width={500}
                    height={400}
                    data={assignments}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='assignmentNumber'></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Stat;