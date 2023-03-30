import { Gauge, SquaresFour } from "phosphor-react";
import React, { useState } from "react";

import { FilterBox } from "../../../components/Reports/FilterBox";
import { ResultBox } from "../../../components/Reports/ResultBox";
import { Section } from "../../../components/Section";

import { KpisTable } from "./KpisTable";
import { ChartEvolutionPatrimonial } from "./ChartEvolutionPatrimonial";
import { ChartPnlLiq } from "./ChartPnlLiq";

const BoxShape = ({ title, content }) => (
  <div className="box-statistic">
    <div className="statistic">
      <span>{title}</span>
      <strong>{content}</strong>
    </div>
  </div>
);

export function Kpis() {
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
        <KpisTable />
      </ResultBox>

      <ResultBox 
        resultTitle="Evolução Patrimonial" 
        Icon={SquaresFour} >
        <ChartEvolutionPatrimonial/>
      </ResultBox>

      <ResultBox
        resultTitle="Pnl Líquido, Bruto e Pontos por Dia"
        Icon={SquaresFour}>
        <ChartPnlLiq/>
      </ResultBox>
    </Section>
  );
}
