import React from "react";
import Chart from "react-apexcharts";
import { ChartBar, SquaresFour } from "phosphor-react";

import { FilterBox } from "../../../components/Reports/FilterBox";
import { ResultBox } from "../../../components/Reports/ResultBox";
import { Section } from "../../../components/Section";

const BoxShape = ({ title, content }) => (
  <div className="box-statistic">
    <div className="statistic">
      <span>{title}</span>
      <strong>{content}</strong>
    </div>
  </div>
);

export function Intraday() {
  const seriesCD = [
    {
      name: "L/P Líq Cumulativo",
      type: "line",
      data: [],
    },
    {
      name: "L/P Líq por trade",
      type: "line",
      data: [],
    },
    {
      name: "Pontos por trade",
      data: [],
    },
  ];

  const optionsCD = {
    chart: { height: 321, type: "line", toolbar: { show: !1 } },
    stroke: { curve: "smooth", width: 2 },
    fill: { type: "solid", opacity: [0.35, 1] },
    labels: [],
    markers: { size: 0 },
    colors: ["#3688fc", "#42d29d"],
    xaxis: {
      labels: { style: { colors: "#aab8c5" } },
      tooltip: { style: { colors: "#aab8c5" } },
    },
    yaxis: [
      { title: { text: "R$" }, labels: { style: { colors: "#aab8c5" } } },
    ],
    tooltip: {
      shared: !0,
      intersect: !1,
      y: {
        formatter: function (o) {
          return void 0 !== o ? o.toFixed(0) + "" : o;
        },
      },
    },
    grid: { borderColor: "#aab8c5" },
    legend: { fontSize: "14px", fontFamily: "14px", offsetY: -10 },
    responsive: [
      {
        breakpoint: 600,
        options: { yaxis: { show: !1 }, legend: { show: !1 } },
      },
    ],
  };

  const seriesTD = [];

  const optionsGP = {
    chart: { height: 320, type: "pie" },
    labels: ["Ganhos", "Perdas"],
    colors: ["#3688fc", "#42d29d"],
    stroke: { show: false },
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: -10,
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { height: 240 }, legend: { show: !1 } },
      },
    ],
  };
  const seriesGP = [10, 5];

  const optionsCV = {
    chart: { height: 320, type: "pie" },
    labels: ["Vendas", "Compras"],
    colors: ["#3688fc", "#42d29d"],
    stroke: { show: false },
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: -10,
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { height: 240 }, legend: { show: !1 } },
      },
    ],
  };
  const seriesCV = [10, 2];

  return (
    <Section sectionName="intraday" pageTitle="Relatório Daytrader">
      <FilterBox filterTitle="Filtrar">
        <form className="filter-form">
          <div className="row">
            <select name="select-date" id="select-date">
              <option value="hoje">Hoje</option>
              <option value="ontem">Ontem</option>
              <option value="sete-dias">Últimos 7 dias</option>
              <option value="trinta-dias">Últimos 30 dias</option>
              <option value="mes">Este mês</option>
              <option value="mes-anterior">Mês Anterior</option>
              <option value="ano">Este ano</option>
              <option value="tudo">Tudo</option>
            </select>

            <select name="select-conta" id="select-conta">
              <option value=""></option>
              <option value="principal">Principal</option>
            </select>

            <input type="text" placeholder="Código" />

            <button className="btn-primary" type="submit">
              Filtrar
            </button>
            <button>Limpar</button>
          </div>
        </form>
      </FilterBox>

      <ResultBox resultTitle="Relatório DayTrader" Icon={SquaresFour}>
        <div className="shape-content">
          <BoxShape title="L/P Líq" content="R$-1.770,85" />
          <BoxShape title="Res Bruto" content="R$-1.765,00" />
          <BoxShape title="Fator Lucro" content="0,00" />
          <BoxShape title="% de acerto" content="0,00 %" />
          <BoxShape title="Total de Trades" content="1" />
          <BoxShape title="Média líq por trade" content="R$-1.770,85" />
          <BoxShape title="Quantidade" content="1.000,0" />
          <BoxShape title="Corretagem+Taxa" content="R$2,66" />
        </div>
      </ResultBox>

      <ResultBox resultTitle="Crescimento no Dia para Conta" Icon={ChartBar}>
        <Chart options={optionsCD} series={seriesCD} height={350} />
      </ResultBox>

      <ResultBox resultTitle="Trades do Dia" Icon={ChartBar}>
        <Chart options={optionsCD} series={seriesTD} height={350} />
      </ResultBox>

      <ResultBox resultTitle="Ganhos/Perdas (Líq)" Icon={ChartBar}>
        <Chart options={optionsGP} series={seriesGP} type="pie" height={350} />
      </ResultBox>

      <ResultBox resultTitle="Compradas/Vendidas (Líq)" Icon={ChartBar}>
        <Chart options={optionsCV} series={seriesCV} type="pie" height={350} />
      </ResultBox>

      <ResultBox resultTitle="Melhores" Icon={ChartBar}>
        <table className="tables-intrades">
          <thead>
            <tr>
              <th>Instrumento</th>
              <th>R$</th>
              <th>R$ por Trade</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </ResultBox>

      <ResultBox resultTitle="Piores" Icon={ChartBar}>
        <table className="tables-intrades">
          <thead>
            <tr>
              <th>Instrumento</th>
              <th>R$</th>
              <th>R$ por Trade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MGLU3</td>
              <td>R$-1.770,85</td>
              <td>R$-1.770,85 (1 trds)</td>
            </tr>
          </tbody>
        </table>
      </ResultBox>
    </Section>
  );
}
