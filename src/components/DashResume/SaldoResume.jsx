import React from 'react'
import {ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts'

export function SaldoResume({profit, date, data, dataKey}) {
    
    return (
        <div className="shape">
            <div className="resume-description">
                <span>Saldo</span>
                <p>R${profit}</p>
                <small>no dia {date}</small>
            </div>
            <div className="resume-chart">
                <ResponsiveContainer width="100%" height={100}>
                    <BarChart width='100%' height='100%' data={data}>
                    <Tooltip />
                    <Bar dataKey={dataKey} barSize={18} fill="#3688FC" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}