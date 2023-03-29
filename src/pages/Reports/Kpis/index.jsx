import { Gauge, SquaresFour } from "phosphor-react";
import React, { useState } from "react";
import Chart from "react-apexcharts";

import { FilterBox } from "../../../components/Reports/FilterBox";
import { ResultBox } from "../../../components/Reports/ResultBox";
import { Section } from "../../../components/Section";

import dtTables from "../../../components/DataTable/object.json";

const BoxShape = ({ title, content }) => (
  <div className="box-statistic">
    <div className="statistic">
      <span>{title}</span>
      <strong>{content}</strong>
    </div>
  </div>
);

$(document).ready(function () {
  $("#table-kpis").DataTable({
    scrollX: true,
    responsive: true,
    autoWidth: true,
    paging: false,
    ordering: false,
    searching: false,
    lengthChange: false,
    info: false,
    ajax: "../../components/DataTable/object.json",
    // columnDefs: [
    //   {
    //     target: 0,
    //     visible: false,
    //     searchable: false,
    //   },
    // ],
  });
});

export function Kpis() {
  const [data, setData] = useState(dtTables);

  const series = [];

  const options = {
    chart: {
      height: 321,
      type: "line",
      zoom: { enabled: 1 },
      toolbar: { show: 1 },
    },
    stroke: { curve: "smooth", width: 2 },
    fill: { opacity: 1 },
    markers: { size: 0 },
    colors: ["#3688fc", "#42d29d"],
    xaxis: {
      labels: { style: { colors: "#aab8c5" } },
      tooltip: { style: { colors: "#aab8c5" } },
    },
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
    tooltip: {
      shared: !0,
      intersect: !1,
      y: {
        formatter: function (o) {
          return void 0 !== o ? o.toFixed(0) + "" : o;
        },
      },
    },
    grid: {
      row: { colors: ["transparent", "transparent"], opacity: 0.2 },
      borderColor: "#aab8c5",
    },
    legend: { fontSize: "14px", fontFamily: "14px", offsetY: -10 },
    responsive: [
      {
        breakpoint: 600,
        options: { yaxis: { show: !1 }, legend: { show: !1 } },
      },
    ],
  };

  const seriesT = [];

  const optionsT = {
    chart: {
      height: 321,
      type: "line",
      zoom: { enabled: 1 },
      toolbar: { show: 1 },
    },
    dataLabels: { enabled: !1 },
    colors: ['#3688fc','#42d29d'],
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
      labels:  { style: { colors: '#aab8c5'}},
      tooltip: {style: { colors: '#aab8c5'}}
    },
    legend: { offsetY: -10 },
    yaxis: [
      {
        title: { text: "R$" },
        labels: {
          formatter: function (o) {
            return void 0 !== o ? "R$" + o.toFixed(2) : o;
          },
          style: { colors: "#aab8c5" }
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

  return (
    <Section sectionName="kpis" pageTitle="Relatório de Desempenho">
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

            <select name="tags" id="tags">
              <option value=""></option>
              <option value="tags">tags</option>
            </select>

            <select name="select-instrumento" id="select-instrumento">
              <option value="instrumento">Instrumento</option>
              <option value="acoes">Ações</option>
              <option value="opcoes">Opções</option>
              <option value="futuros">Futuros</option>
              <option value="forex">Forex</option>
              <option value="cryptos">Cryptos</option>
              <option value="cfds">Cfds</option>
            </select>

            <input type="text" placeholder="Código" />
          </div>

          <div className="row">
            <input type="text" placeholder="Variação de Preço" />

            <input type="time" placeholder="Horário de" />

            <input type="time" placeholder="Horário até" />

            <input type="text" placeholder="% limite" />

            <select name="select-day" id="select-day">
              <option value="">Dia</option>
              <option value="segunda">Segunda</option>
              <option value="terca">Terça</option>
              <option value="quarta">Quarta</option>
              <option value="quinta">Quinta</option>
              <option value="sexta">Sexta</option>
              <option value="sabado">Sabado</option>
              <option value="domingo">Domingo</option>
            </select>

            <button className="btn-primary" type="submit">
              Filtrar
            </button>
            <button>Limpar</button>
          </div>
        </form>
      </FilterBox>

      <ResultBox resultTitle="Mostrando todos os Trades" Icon={Gauge}>
        <h2>Métrica de Desempenho</h2>
        <div className="shape-content kpis">
          <BoxShape title="Fator de Lucro (líq/bruto)" content="2.63 / 2.65" />
          <BoxShape title="Expectativa por trade" content="R$684,04" />
          <BoxShape title="% de acerto" content="58.97%" />
          <BoxShape title="% de acerto diário" content="58%" />
          <BoxShape title="Rebaixamento máximo" content="R$-6.019,62" />
          <BoxShape title="Compras/Vendas" content="33 / 6" />
          <BoxShape title="L/P Comprado" content="R$29.576,42" />
          <BoxShape title="L/P Vendido" content="R$-2.894,08" />
          <BoxShape title="Melhor Trade" content="R$14.495,81" />
          <BoxShape title="Pior Trade" content="R$-3.880,88" />
          <BoxShape title="Média de Ganhos" content="R$1.870,14" />
          <BoxShape title="Média de Perdas " content="R$-1.020,68" />
          <BoxShape title="Total de Trades" content="39" />
          <BoxShape
            title="Tempo méd em trades com lucro"
            content="130d 19h31m46s"
          />
          <BoxShape
            title="Tempo méd em trades com preju."
            content="92d 2h18m37s"
          />
          <BoxShape title="Razão tempo méd L/P" content="1,42" />
          <BoxShape title="Total em Pontos" content="-1.193,79" />
          <BoxShape title="Méd de ptos por trade" content="-30,61" />
          <BoxShape title="Total em Pontos + qtd" content="26.915,7" />
          <BoxShape title="Méd de ptos por trade + qtd" content="690,15" />
          <BoxShape
            title="Projeção de L/P próximos 30 dias"
            content="R$30.219,32"
          />
          <BoxShape
            title="Projeção de L/P próximos 100 dias"
            content="R$45.221,81"
          />
          <BoxShape
            title="Projeção de L/P próx. 100 trades"
            content="R$92.193,33"
          />
          <BoxShape
            title="Projeção de L/P próx. 1000 trades"
            content="R$707.826,23"
          />
        </div>
        <h2>Métricas Financeiras</h2>
        <div className="shape-content kpis">
          <BoxShape title="Faturamento Líquido" content="R$23.789,67" />
          <BoxShape title="Média diária líq" content="R$214,32" />
          <BoxShape title="Faturamento Bruto" content="R$24.070,39" />
          <BoxShape title="Média diária bruto" content="R$216,85" />
          <BoxShape title="Lucro líq total" content="R$43.013,28" />
          <BoxShape title="Preju. líq total" content="R$-16.330,94" />
          <BoxShape title="Lucro brutal total" content="R$43.194,05" />
          <BoxShape title="Preju. bruto total" content="R$-16.287,4" />
          <BoxShape title="Saldo em conta" content="R$23.789,67" />
          <BoxShape title="Total de Saídas" content="R$0" />
          <BoxShape title="Total de Entradas" content="R$0" />
          <BoxShape title="Média líq por trade" content="R$609,99" />
        </div>
        <h2>Métricas de Volume</h2>
        <div className="shape-content kpis">
          <BoxShape title="Total de Trades" content="39" />
          <BoxShape title="Volume Total" content="38.736" />
          <BoxShape title="Volume Médio Dia" content="348,97" />
          <BoxShape title="Posição Média" content="497" />
        </div>
        <h2>Métricas de Custos</h2>
        <div className="shape-content kpis">
          <BoxShape title="Corretagem Total" content="R$0" />
          <BoxShape title="Corretagem Média Diária" content="R$0" />
          <BoxShape title="Total em Taxas de negociação" content="R$280,71" />
          <BoxShape
            title="Média Diária em Taxas de negociação"
            content="R$2,53"
          />
        </div>
      </ResultBox>

      {/* <ResultBox resultTitle="Seu Mês Atual" Icon={SquaresFour}></ResultBox> */}

      <ResultBox resultTitle="Relatório de Progresso Mensal" Icon={SquaresFour}>
        <table id="table-kpis" className="cell-border" width={"100%"}>
          <thead>
            <tr>
              <th>Data</th>
              <th>L/P Líq</th>
              <th>L/P Bruto</th>
              <th>% de acerto</th>
              <th>Fator Lucro</th>
              <th>Volume</th>
              <th>Total em Pontos</th>
              <th>Trades</th>
              <th>Posição Média</th>
            </tr>
          </thead>
        </table>
      </ResultBox>

      <ResultBox resultTitle="Evolução Patrimonial" Icon={SquaresFour}>
        <Chart options={options} series={series} height={350} />
      </ResultBox>

      <ResultBox
        resultTitle="Pnl Líquido, Bruto e Pontos por Dia"
        Icon={SquaresFour}
      >
        <Chart options={optionsT} series={seriesT} height={350} />
      </ResultBox>
    </Section>
  );
}
