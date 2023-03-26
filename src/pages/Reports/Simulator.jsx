import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Gauge, SquaresFour } from "phosphor-react";

import { ResultBox } from "../../components/Reports/ResultBox";
import { Section } from "../../components/Section";
import { DataTables } from "../../components/DataTable";

import dadosFake from '../../components/DataTable/object.json';
import { useForm } from "react-hook-form";

//dados fake
const data01 = [
  18.686, 82.257, 541.147, 1252.628, 2761.104, 2799.841, 2568.401, 2477.987,
  -813.41, -1163.85, -1136.982, 351.204, 2910.735, 4259.484, 3979.044, 4138.604,
  7481.024, 7600.915, 7230.618, 6823.768, 6730.062, 9695.647, 9205.207,
  10062.904, 11892.464, 11220.05, 7339.17, 7000.105, 6793.472, 7372.646,
  9265.331, 9269.461, 23765.274, 27790.213, 29920.957, 28283.1, 30671.004,
  28453.194, 26682.341,
];
const data02 = [
  18.686, 82.257, 541.147, 1252.628, 2761.104, 2799.841, 2568.401, 2477.987,
  -813.41, -1163.85, -1136.982, 351.204, 2910.735, 4259.484, 3979.044, 4138.604,
  7481.024, 7600.915, 7230.618, 6823.768, 6730.062, 9695.647, 9205.207,
  10062.904, 11892.464, 11220.05, 7339.17, 7000.105, 6793.472, 7372.646,
  9265.331, 9269.461, 23765.274, 27790.213, 29920.957, 28283.1, 30671.004,
  28453.194, 26682.341,
];

export function Simulator() {
  const {register, handleSubmit, reset } = useForm();

  //Função disparado do formulario
  async function onSubmit(values) {
    console.log(values);
  }

  const [dataSimulado, setDataSimulado] = useState(data01);
  const [dataReal, setDataReal] = useState(data02);

  const options = {
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

  const series = [];


  //trazer informações do banco e adicionar no set() e deixar o = useState('')
  const [lpsimuladotrade, setLPSimuladoTrade] = useState("R$684,16");
  const [lprealtrade, setLPRealTrade] = useState("R$684,16");
  const [lpsimulado, setLPSimulado] = useState("R$26.682,34");
  const [lpreal, setLPReal] = useState("R$26.682,34");

  const [qtdTrade, setQtdTrade] = useState("39");

  // const [data, setDate] = useState([]);
  const [data, setDate] = useState(dadosFake);

  return (
    <Section sectionName="simulator" pageTitle="Simulador de Resulatados">
      <div className="card-box">
        <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
          <div className="row">
            <select name="select-date" id="select-date" {...register('date')}>
              <option value="hoje">Hoje</option>
              <option value="ontem">Ontem</option>
              <option value="sete-dias">Últimos 7 dias</option>
              <option value="trinta-dias">Últimos 30 dias</option>
              <option value="mes">Este mês</option>
              <option value="mes-anterior">Mês Anterior</option>
              <option value="ano">Este ano</option>
              <option value="tudo">Tudo</option>
            </select>

            <select name="select-conta" id="select-conta" {...register('conta')}>
              <option value="contas">Todas as Contas</option>
              <option value="principal">Principal</option>
            </select>

            <select name="tags" id="tags" {...register('tag')}>
              <option value=""></option>
              <option value="tags">tags</option>
            </select>

            <select name="select-instrumento" id="select-instrumento" {...register('instrumento')}>
              <option value="instrumento">Instrumento</option>
              <option value="acoes">Ações</option>
              <option value="opcoes">Opções</option>
              <option value="futuros">Futuros</option>
              <option value="forex">Forex</option>
              <option value="cryptos">Cryptos</option>
              <option value="cfds">Cfds</option>
            </select>

            <select name="select-type" id="select-type" {...register('type')}>
              <option value="">Tipo</option>
              <option value="day-trader">Day Trader</option>
              <option value="swing-trader">Swing Trader</option>
              <option value="ambas">Ambas</option>
            </select>

            <select name="select-lado" id="select-lado" {...register('lado')}>
              <option value="">lado</option>
              <option value="compra">Compra</option>
              <option value="venda">Venda</option>
            </select>

            <input type="text" placeholder="Código" {...register('codigo')} />
          </div>
          <div className="row">
            <input type="text" placeholder="Variação de Preço" {...register('variacao')}/>
            <input type="time" placeholder="Horário de" {...register('hrDe')}/>
            <input type="time" placeholder="Horário até" {...register('hrAte')}/>
            <input type="text" placeholder="% limite" {...register('pct')}/>
            <select name="select-day" id="select-day" {...register('dia')}>
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
              Simular
            </button>
            <button onClick={reset()}>Limpar</button>
          </div>
        </form>
      </div>

      <div className="shape-content">
        <div className="box-statistic">
          <div className="statistic">
            <span>L/P simulado por trade</span>
            <strong>{lpsimuladotrade}</strong>
            <div className="box-info">
              <span>{`${qtdTrade} trades`}</span>
            </div>
          </div>
        </div>
        <div className="box-statistic">
          <div className="statistic">
            <span>L/P real por trade</span>
            <strong>{lprealtrade}</strong>
            <div className="box-info">
              <span>{`${qtdTrade} trades`}</span>
            </div>
          </div>
        </div>
        <div className="box-statistic">
          <div className="statistic">
            <span>L/P real por trade</span>
            <strong>{lpsimulado}</strong>
            <div className="box-info">
              <span>{`${qtdTrade} trades`}</span>
            </div>
          </div>
        </div>
        <div className="box-statistic">
          <div className="statistic">
            <span>L/P real</span>
            <strong>{lpreal}</strong>
            <div className="box-info">
              <span>{`${qtdTrade} trades`}</span>
            </div>
          </div>
        </div>
      </div>

      <ResultBox resultTitle="Grafico do Resultado" Icon={Gauge}>
        <Chart options={options} series={series} type="line" height={350} />
      </ResultBox>

      <ResultBox resultTitle="Grafico de Resultados" Icon={SquaresFour}>
        <DataTables data={data} tableId='table-simulator' />
      </ResultBox>
    </Section>
  );
}
