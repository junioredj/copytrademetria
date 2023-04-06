import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Gauge, SquaresFour } from "phosphor-react";
import "jquery";
import "jquery-ui-dist/jquery-ui";

import { ResultBox } from "../../../components/Reports/ResultBox";
import { Section } from "../../../components/Section";

import { useForm } from "react-hook-form";
import {
  GetTrades,
  getUserLocalStorage,
} from "../../../context/AuthProvider/util";
import { Api } from "../../../services/api";
import { Filter , GetTags } from "./webrequest";




export function Simulator() {

  let myJSON={"attr1":"abcdef", "attr2":"12345", "attr3":"hello"};
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [dados, setDados] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(()=>{
    GetTags(email).then((response)=>{
      setTags(JSON.parse(response));
    })
  }, []);




  var email = getUserLocalStorage().email;

  //Função disparado do formulario
  async function onSubmit(values) {
    const promise = await new Promise((resolve) =>
      setTimeout(() => {
        Filter(
          values.date,
          values.type,
          values.lado,
          values.codigo,
          values.tag,
          email
        ).then((response) => {
          // setTrade(response);
          var objeto = JSON.parse(response);
          resolve("helo");

          setDados([objeto.chart_lucro]);//[{data:[1,3,5]}])


          $(document).ready(function () {
            $("#trades-table").DataTable({
              data: objeto.trades,
              scrollX: true,
              responsive: true,
              autoWidth: true,
              bDestroy: true,
              columns: [
                { data: "codigo" },
                { data: "lado" },
                { data: "qty_compra" },
                { data: "qty_venda" },
                { data: "preco_compra" },
                { data: "preco_venda" },
                { data: "res_bruto" },
                { data: "corretagem" },
                { data: "taxas" },
                { data: "res_liq" },
                { data: "tags" },
                { data: "pct" },
                { data: "opcoes" },
              ],

              language: {
                lengthMenu: "Mostrar _MENU_ registro por página",
                zeroRecords: "Nada encontrado",
                info: "Mostrando a página _PAGE_ de _PAGES_",
                infoEmpty: "Nenhum registro encontrado",
                infoFiltered: "(  fffffffffffffffffff _MAX_ total records)",
                search: "Pesquisar",
                paginate: {
                  first: "Primeiro",
                  last: "Último",
                  next: "Próximo",
                  previous: "Anterior",
                },
              },
            });
          });
        });


      }, 1000)
    );
  }

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
      borderColor: "#474d56",
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


  //trazer informações do banco e adicionar no set() e deixar o = useState('')
  const [lpsimuladotrade, setLPSimuladoTrade] = useState("R$684,16");
  const [lprealtrade, setLPRealTrade] = useState("R$684,16");
  const [lpsimulado, setLPSimulado] = useState("R$26.682,34");
  const [lpreal, setLPReal] = useState("R$26.682,34");

  const [qtdTrade, setQtdTrade] = useState("39");

  return (
    <Section sectionName="simulator" pageTitle="Simulador de Resultados">
      <div className="card-box">
        <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
          <div className="row">
            <select name="select-date" id="select-date" {...register("date")}>
              <option value="hoje">Hoje</option>
              <option value="ontem">Ontem</option>
              <option value="sete-dias">Últimos 7 dias</option>
              <option value="trinta-dias">Últimos 30 dias</option>
              <option value="mes">Este mês</option>
              <option value="mes-anterior">Mês Anterior</option>
              <option value="ano">Este ano</option>
              <option value="tudo">Tudo</option>
            </select>

            <select
              name="select-conta"
              id="select-conta"
              {...register("conta")}
            >
              <option value="contas">Todas as Contas</option>
              <option value="principal">Principal</option>
            </select>

            

                

            <select name="tags" id="tags" {...register("tag")}>
              <option value=""></option>
              {


                Object.keys(tags).map((innerAttr, index) => {
                  return (
                      <option key={index} value={(tags[innerAttr].tag)  }>  {(tags[innerAttr].tag)}</option>
                )})
              }

            </select>

            <select
              name="select-instrumento"
              id="select-instrumento"
              {...register("instrumento")}
            >
              <option value="instrumento">Instrumento</option>
              <option value="acoes">Ações</option>
              <option value="opcoes">Opções</option>
              <option value="futuros">Futuros</option>
              <option value="forex">Forex</option>
              <option value="cryptos">Cryptos</option>
              <option value="cfds">Cfds</option>
            </select>

            <select name="select-type" id="select-type" {...register("type")}>
              <option value="">Tipo</option>
              <option value="day-trader">Day Trader</option>
              <option value="swing-trader">Swing Trader</option>
              <option value="ambas">Ambas</option>
            </select>

            <select name="select-lado" id="select-lado" {...register("lado")}>
              <option value="ambos">lado</option>
              <option value="compra">Compra</option>
              <option value="venda">Venda</option>
            </select>

            <input type="text" placeholder="Código" {...register("codigo")} />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Variação de Preço"
              {...register("variacao")}
            />
            <input type="time" placeholder="Horário de" {...register("hrDe")} />
            <input
              type="time"
              placeholder="Horário até"
              {...register("hrAte")}
            />
            <input type="text" placeholder="% limite" {...register("pct")} />
            {/* <select name="select-day" id="select-day" {...register('dia')}>
              <option value="">Dia</option>
              <option value="segunda">Segunda</option>
              <option value="terca">Terça</option>
              <option value="quarta">Quarta</option>
              <option value="quinta">Quinta</option>
              <option value="sexta">Sexta</option>
              <option value="sabado">Sabado</option>
              <option value="domingo">Domingo</option>
            </select> */}
            <button
              disabled={isSubmitting}
              className="btn-primary"
              type="submit"
            >
              {isSubmitting ? "Simulando..." : "Simular"}
            </button>
            <button onClick={() => reset()}>Limpar</button>
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
        <Chart options={options} series={dados} type="line" height={350} /> 
      </ResultBox>

      <ResultBox resultTitle="Tabela de Resultados" Icon={SquaresFour}>
        <table id="trades-table" className="stripe" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Lado</th>
              <th>Qtd Compra</th>
              <th>Qtd Venda</th>
              <th>Preço Compra</th>
              <th>Preço Venda</th>
              <th>Res Bruto</th>
              <th>Corretagem</th>
              <th>Taxas</th>
              <th>Res Liq</th>
              <th>Tags</th>
              <th>Porcenteagem</th>
              <th>Opções</th>
            </tr>
          </thead>
        </table>
      </ResultBox>
    </Section>
  );
}
