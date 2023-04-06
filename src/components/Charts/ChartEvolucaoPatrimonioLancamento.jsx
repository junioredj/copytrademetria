import Chart from 'react-apexcharts';
import { GetEvolucaoPatrimonial, getUserLocalStorage} from '../../context/AuthProvider/util';
import React, { useState } from 'react'
    
 
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
      labels:{
        format: "dd-MM-yyyy",
        style:{
          colors: '#8e8da4'
        }
      },
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