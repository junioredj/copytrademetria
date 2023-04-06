import React from 'react'
import Chart from "react-apexcharts";

export function SaldoResumePeriodo({periodo, valor, porcentagem, data, dataKey}) {

    //Buscar dados no banco com esse formato 
    const series = [{
        data: [0,-3182.57,3619.09,846,284.82,692.65,3613.09,4930.68,-2212,-1765,]
    }]

    const options2 = {
        chart: {type: "line", height: 60, sparkline: {enabled: !0}},
        
        stroke: {width: 2, curve: "smooth"},
        markers: {size: 0},
        colors: ["#42d29d", "#0acf97", "#fa5c7c", "#ffbc00"],
        tooltip: {
            fixed: {enabled: !1}, x: {show: !1}, y: {
                title: {
                    formatter: function (o) {
                        return "R$"
                    }
                }
            }, marker: {show: !1}
        }
    };
     
    return (
        <div className="shape">
            <div className="resume-description">
                <span>Ganhos último {periodo}</span>
                <p className={(parseFloat(valor)) < 0? 'result-red': ''}>R${valor}</p>
                <small>{porcentagem}</small>
            </div>
            <div className="resume-chart">
                <Chart options={options2} series={series} height={80} type='line' />
            </div>
        </div>
    );
}