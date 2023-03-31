import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ChartBar, SquaresFour } from "phosphor-react";

import { FilterBox } from "../../../components/Reports/FilterBox";
import { ResultBox } from "../../../components/Reports/ResultBox";
import { Section } from "../../../components/Section";
import { getDayTrade } from "./webrequest";
import {
  getUserLocalStorage,
} from "../../../context/AuthProvider/util";

const BoxShape = ({ title, content }) => (
  <div className="box-statistic">
    <div className="statistic">
      <span>{title}</span>
      <strong>{content}</strong>
    </div>
  </div>
);

export function Intraday() {


  var seriesGP = [];
  var  seriesCV = [10, 2];
  var seriesCD = [];
  var  seriesTD = [];

  var ativo_melhor_trade;
  var ativo_pior_trade;
  var lucro_melhor_trade = 0;
  var perda_pior_trade = 0;

  const [json, setJson] = useState([]);

  useEffect(()=>{

  
    
    var email = getUserLocalStorage().email;
    getDayTrade(email).then((response) =>{
      setJson(JSON.parse(response));

    });
  }, []);

  try
  {
    seriesCV = json.pieCV;
    seriesGP = json.pieGP;
    ativo_melhor_trade = json.melhor_trade.ativo;
    lucro_melhor_trade = json.melhor_trade.lucro;

    ativo_pior_trade = json.pior_trade.ativo;
    perda_pior_trade = json.pior_trade.lucro;
    seriesCD = [
      {
        name: "L/P Líq por trade",
        type: "line",
        data: json.lucro_liquido_trade,
      },
      {
        name: "Pontos por trade",
        data: json.pontos_por_trade,
      },
    ];

    seriesTD = [
      {
        name: "Lucro",
        type: "line",
        data: json.trades,
      },
    ];
  }
  catch(error)
  {

  }

  

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
          <BoxShape title="L/P Líq" content={`R$${json.lucro_liquido}`}/>
          <BoxShape title="Res Bruto" content={`R$${json.lucro_bruto}`} />
          <BoxShape title="Fator Lucro" content={`${json.fator_lucro}`} />
          <BoxShape title="% de acerto" content={`${json.pct_acerto}%`} />
          <BoxShape title="Total de Trades" content={`${json.total_trades}`} />
          <BoxShape title="Média líq por trade" content={`R$${json.media_liq_trade}`} />
          <BoxShape title="Quantidade" content={`${json.volume_total}`}/>
          <BoxShape title="Corretagem+Taxa" content="---" />
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
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>{ativo_melhor_trade}</td>
                <td>R${lucro_melhor_trade.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </ResultBox>

      <ResultBox resultTitle="Piores" Icon={ChartBar}>
        <table className="tables-intrades">
          <thead>
            <tr>
              <th>Instrumento</th>
              <th>R$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ativo_pior_trade}</td>
              <td>{perda_pior_trade != 0? perda_pior_trade: ""}</td>
            </tr>
          </tbody>
        </table>
      </ResultBox>
    </Section>
  );
}
