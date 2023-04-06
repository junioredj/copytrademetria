import React from 'react'
import Chart from "react-apexcharts";


export function SaldoResume({profit, date, data, dataKey}) {

    //Buscar dados no banco com esse formato 
    const series = [{
        data: [17243.62,14061.05,17680.14,18526.14,18810.97,19503.62,23116.71,28047.39,25835.39,24070.39,]
    }]

    const options1 = {
        chart: {type: "bar", height: 60, sparkline: {enabled: !0}},
        plotOptions: {
            bar: {
                colors: {
                    ranges: [{from: -10000000, to: -0, color: "#fa5c7c"}]
                }, columnWidth: "60%"
            }
        },
        colors: ["#3688FC", "#0acf97", "#fa5c7c", "#ffbc00"],
        
        labels: [102,103,104,105,106,107,108,109,110,111,],
        xaxis: {crosshairs: {width: 1}},
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
                <span>Saldo</span>
                <p>R${profit}</p>
                <small>no dia {date}</small>
            </div>
            <div className="resume-chart">
                <Chart options={options1} series={series} height={60} type='bar' />
            </div>
        </div>
    );
}