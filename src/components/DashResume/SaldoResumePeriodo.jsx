import React from 'react'
import {ResponsiveContainer, LineChart, Line, Tooltip, CartesianGrid } from 'recharts'

export function SaldoResumePeriodo({periodo, valor, porcentagem, data, dataKey}) {
    
    return (
        <div className="shape">
            <div className="resume-description">
                <span>Ganhos último {periodo}</span>
                <p>{valor}</p>
                <small>{porcentagem}</small>
            </div>
            <div className="resume-chart">
                <ResponsiveContainer maxHeight='100px' width="100%" height="100%">
                    <LineChart width={10} height={10} data={data}>
                        <Tooltip  />
                        <Line type='monotone' dataKey={dataKey} stroke="#42D29D" strokeWidth='3' dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}