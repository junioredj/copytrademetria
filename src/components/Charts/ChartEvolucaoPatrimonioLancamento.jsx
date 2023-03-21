import Chart from 'react-apexcharts';
import { GetEvolucaoPatrimonial, getUserLocalStorage} from '../../context/AuthProvider/util';
import React, { useState } from 'react'
    
  const series = [{
    name: 'Series',
    data: [{
        x: 1996,
        y: 322
      },
      {
        x: 1997,
        y: 324
      },
      {
        x: 1998,
        y: 329
      },
      {
        x: 1999,
        y: 342
      },
      {
        x: 2000,
        y: 348
      },
      {
        x: 2001,
        y: 334
      },
      {
        x: 2002,
        y: 325
      },
      {
        x: 2003,
        y: 316
      },
      {
        x: 2004,
        y: 318
      },
      {
        x: 2005,
        y: 330
      },
      {
        x: 2006,
        y: 355
      },
      {
        x: 2007,
        y: 366
      },
      {
        x: 2008,
        y: 337
      },
      {
        x: 2009,
        y: 352
      },
      {
        x: 2010,
        y: 377
      },
      {
        x: 2011,
        y: 383
      },
      {
        x: 2012,
        y: 344
      },
      {
        x: 2013,
        y: 366
      },
      {
        x: 2014,
        y: 389
      },
      {
        x: 2015,
        y: 334
      }
    ]
  }];

  const options = {
    chart: {
      type: 'area',
      height: 250
    },
    dataLabels: {
      enabled: false
    },
    legend: {
        labels:{
            colors: '#fff',
        }
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: true
      }
    },
    yaxis: {
      tickAmount: 5,
      floating: false,
    
      labels: {
        style: {
          colors: '#8e8da4',
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      }
    },
    fill: {
        colors: '#3688fc',
      opacity: 0.5
    },
    tooltip: {
      x: {
        format: "yyyy",
      },
      fixed: {
        enabled: false,
        position: 'topRight'
      },
    },
    grid: {
      borderColor: '#474d56',
      yaxis: {
        lines: {
          offsetX: -30
        }
      },
      padding: {
        left: 20
      }
    }
  };
  

export const ChartEvolucaoPatrimonioLancamento = () => {

  //Obtem os dados da api
const [dados, setDados] = useState([]);
GetEvolucaoPatrimonial(getUserLocalStorage().email).then(t => {setDados(t)}); 
    return (
        <div className="content">
            <h4>EVOLUÇÃO PATRIMONIAL COM LANÇAMENTOS</h4>

            <div className="chart-content">
              <Chart options={options} series={dados} type='area' height={250} />
            </div>
        </div>
    );
};