import React from "react";
import Chart from "react-apexcharts";

export function ChartEvolutionPatrimonial(dados) {
  const series = [];

  const options = {
    series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
    chart: {
      height: 321,
      type: "line",
      zoom: {
        enabled: 1,
      },
      toolbar: {
        show: 1,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      opacity: 1,
    },
    labels: [],
    markers: {
      size: 0,
    },
    colors: ["#3688fc", "#42d29d"],
    xaxis: {
      labels: { style: { colors: "#aab8c5" } },
      tooltip: { style: { colors: "#aab8c5" } },
    },
    yaxis: [
      {
        title: {
          text: "R$",
        },
        labels: {
          formatter: function (o) {
            return void 0 !== o ? "R$" + o.toFixed(2) : o;
          },
          style: { colors: "#aab8c5" },
        },
      },
    ],
    tooltip: {
      shared: !0,
      intersect: !1,
      y: {
        formatter: function (o) {
          return void 0 !== o ? "R$" + o.toFixed(2) : o;
        },
      },
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.2,
      },
      borderColor: "#f1f3fa",
    },
    legend: {
      fontSize: "14px",
      fontFamily: "14px",
      offsetY: -10,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          yaxis: {
            show: !1,
          },
          legend: {
            show: !1,
          },
        },
      },
    ],
  };
  return <Chart options={options} series={[{"data": dados.dados}]} type="line" height={350} />
}
