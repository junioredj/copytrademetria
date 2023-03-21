import { SquaresFour } from "phosphor-react";
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { SaldoResumePeriodo } from "../components/DashResume/SaldoResumePeriodo";
import { SaldoResume } from "../components/DashResume/SaldoResume";
import { DashStatistic } from "../components/DashStatistic";
import {ChartEvolucaoPatrimonio} from '../components/Charts/ChartEvolucaoPatrimonio';
import { ChartEvolucaoPatrimonioLancamento } from "../components/Charts/ChartEvolucaoPatrimonioLancamento";
import { getUserLocalStorage, GetResultYears} from "../context/AuthProvider/util";



const data = [
    {
        mes: "Valor",
        vd: 578.24,
        vm: 1078.24,
        va: 2678.24,
    },
    {
        mes: "Valor",
        vd: 1978.24,
        vm: 2978.24,
        va: 2078.24,
    },
    {
        mes: "Valor",
        vd: 1078.24,
        vm: 1578.24,
        va: 2678.24,
    },
    {
        mes: "Valor",
        vd: 578.24,
        vm: 2078.24,
        va: 3078.24,
    },
    {
        mes: "Valor",
        vd: 1078.24,
        vm: 2078.24,
        va: 4078.24,
    },
    {
        mes: "Valor",
        vd: 1978.24,
        vm: 2678.24,
        va: 3678.24,
    },
    
];


export function DashboardApp (){
    //Obtem os dados da api
  const [resultArray, setData] = useState([]);
  GetResultYears(getUserLocalStorage().email).then(t => {setData(t)}); 
    


    // (GetResultYears(getUserLocalStorage().email));
    return (
        <div className="dashboard_app">
            <div className="atalho-relatorios">
                <div className="container">
                    <h4>Dashboard</h4>
                    <div className="atalho-content">
                        <Link to='/relatorios/trades' >
                            <SquaresFour size={20} fill='#fff' weight="bold"/>
                            <span>Relatório de Trades</span>
                        </Link>
                        <Link to='/relatorios/desempenho' >
                            <SquaresFour size={20} fill='#fff' weight="bold"/>
                            <span>Relatório de Desempenho</span>
                        </Link>
                        <Link to='/relatorios/instrumentos' >
                            <SquaresFour size={20} fill='#fff' weight="bold"/>
                            <span>Relatório por instrumento</span>
                        </Link>
                        <Link to='/relatorios/calendario-custodias' >
                            <SquaresFour size={20} fill='#fff' weight="bold"/>
                            <span>Calendário de Cústódia</span>
                        </Link>
                        <Link to='/relatorios/custodias' >
                            <SquaresFour size={20} fill='#fff' weight="bold"/>
                            <span>Minhas custódias</span>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="dash-resume">
                <div className="container">
                    <div className="dash-result">
                        <SaldoResume profit={resultArray.profit} date={`${resultArray.date}`}/>

                        <SaldoResumePeriodo 
                            periodo="dia" 
                            valor={parseFloat(resultArray.result_day)}
                            porcentagem="-6.93%" 
                            data={resultArray.day}
                            dataKey="vd" />

                        <SaldoResumePeriodo 
                            periodo="mês" 
                            valor={resultArray.result_mon}
                            porcentagem="0" 
                            data={resultArray.mon}
                            dataKey="vm"/>

                        <SaldoResumePeriodo 
                            periodo="ano" 
                            valor={resultArray.result_year}
                            porcentagem="0" 
                            data={resultArray.year}
                            dataKey="va"/>
                    </div>

                    <DashStatistic fator={`${resultArray.profit_factor}`}/>
                </div>
            </div>

            <div className="dash-chart">
                <div className="container">
                    <ChartEvolucaoPatrimonio/>
                    
                    <ChartEvolucaoPatrimonioLancamento/>
                </div>
            </div>
        </div>
    );
}