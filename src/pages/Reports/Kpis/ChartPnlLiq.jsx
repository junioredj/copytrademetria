import React from "react";
import Chart from "react-apexcharts";

export function ChartPnlLiq() {
  const seriesT = [];

  const optionsT = {
    chart: {
      height: 321,
      type: "line",
      zoom: { enabled: 1 },
      toolbar: { show: 1 },
    },
    dataLabels: { enabled: !1 },
    colors: ["#3688fc", "#42d29d"],
    annotations: {
      yaxis: [
        {
          y: 500.0,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "Objetivo de ganhos diário R$500,00",
          },
        },
        {
          y: -100,
          borderColor: "#fa5c7c",
          label: {
            borderColor: "#fa5c7c",
            style: {
              color: "#fff",
              background: "#fa5c7c",
            },
            text: "Limite de perda diária R$-100,00",
          },
        },
      ],
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [{ from: -10000000, to: -0, color: "#fa5c7c" }],
        },
        columnWidth: "80%",
      },
    },
    dataLabels: { enabled: !1 },
    xaxis: {
      labels: { style: { colors: "#aab8c5" } },
      tooltip: { style: { colors: "#aab8c5" } },
    },
    legend: { offsetY: -10 },
    yaxis: [
      {
        title: { text: "R$" },
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
      row: { colors: ["transparent", "transparent"], opacity: 0.2 },
      borderColor: "#aab8c5",
    },
  };

  return <Chart options={optionsT} series={seriesT} height={350} />;
}
