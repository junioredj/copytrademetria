import Chart from "react-apexcharts";
import React, { useState } from "react";

import {
  GetEvolucaoPatrimonial,
  getUserLocalStorage,
} from "../../context/AuthProvider/util";

const options = {
  chart: {
    type: "area",
    height: 350,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    labels: {
      colors: "#fff",
    },
  },
  stroke: {
    curve: "straight",
  },
  xaxis: {
    type: "datetime",
    labels:{
      format: "dd-MM-yyyy",
      style:{
        colors: '#8e8da4'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    tickAmount: 5,
    floating: false,

    labels: {
      style: {
        colors: "#8e8da4",
      },
      offsetY: -7,
      offsetX: 0,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    colors: ["#3688fc", "#42d29d"],
    opacity: 0.5,
  },
  tooltip: {
    x: {
      format: "yyyy",
    },
    fixed: {
      enabled: false,
      position: "topRight",
    },
  },
  noData: {
    text: "Importe Operações",
  },
  grid: {
    borderColor: "#474d56",
    yaxis: {
      lines: {
        offsetX: -30,
      },
    },
    padding: {
      left: 20,
    },
  },
};

export const ChartEvolucaoPatrimonio = () => {
  //Obtem os dados da api
  const [dados, setDados] = useState([]);
  
  GetEvolucaoPatrimonial(getUserLocalStorage().email).then((t) => {
    setDados(t);
  });

  return (
    <div className="content">
      <h4>EVOLUÇÃO PATRIMONIAL SEM LANÇAMENTOS PARA CONTA PRINCIPAL</h4>

      <div className="chart-content">
        <Chart options={options} series={dados} type="area" height={350} />
      </div>
    </div>
  );
};
