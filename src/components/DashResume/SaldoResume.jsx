import React from 'react'
import {ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts'


const data = [
    {
        mes: "Janeiro",
        valor: 22678.24
    },
    {
        mes: "Fevereiro",
        valor: 23788.67,
    },
    {
        mes: "Março",
        valor: 23178.24,
    },
    {
        mes: "Abril",   
        valor: 22978.24,
    },
    {
        mes: "Maio",
        valor: 22478.24,
    },
    {
        mes: "Junho",
        valor: 24178.24,
    },
    {
        mes: "Julho",
        valor: 22678.24,
    },
    
];

export function SaldoResume(profit) {
    
    return (
        <div className="shape">
            <div className="resume-description">
                <span>Saldo</span>
                <p>R${profit.profit}</p>
                <small>no dia {profit.date}</small>
            </div>
            <div className="resume-chart">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={100} height={3} data={data}>
                    <Bar dataKey="valor" barSize={18} fill="#3688FC" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}