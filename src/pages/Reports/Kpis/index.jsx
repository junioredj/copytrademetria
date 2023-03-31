import { Gauge, SquaresFour } from "phosphor-react";
import React, { useEffect, useState } from "react";

import { FilterBox } from "../../../components/Reports/FilterBox";
import { ResultBox } from "../../../components/Reports/ResultBox";
import { Section } from "../../../components/Section";

import { KpisTable } from "./KpisTable";
import { ChartEvolutionPatrimonial } from "./ChartEvolutionPatrimonial";
import { ChartPnlLiq } from "./ChartPnlLiq";
import { getDesempenho } from "./webrequest";
import {
  GetTrades,
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

export function Kpis() {
  const [json, setJson] = useState([]);
  useEffect(()=>{

  
    
    var email = getUserLocalStorage().email;
    getDesempenho(email).then((response) =>{
      setJson(JSON.parse(response));
    });
  }, []);

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
          <BoxShape title="Fator de Lucro (líq/bruto)" content={json.fator_lucro} />
          <BoxShape title="Expectativa por trade" content="---" />
          <BoxShape title="% de acerto" content={`${json.pct_acerto}%`} />
          <BoxShape title="% de acerto diário" content={`${json.pct_acerto_dia}%`} />
          <BoxShape title="Rebaixamento máximo" content={`R$${json.rebaixamento_maximo}`} />
          <BoxShape title="Compras/Vendas" content={`${json.qtd_compra} / ${json.qtd_venda}`} />
          <BoxShape title="L/P Comprado" content={`R$${json.lp_comprado}`} />
          <BoxShape title="L/P Vendido" content={`R$${json.lp_vendido}`} />
          <BoxShape title="Melhor Trade" content={`R$${json.melhor_trade}`} />
          <BoxShape title="Pior Trade" content={`R$${json.pior_trade}`} />
          <BoxShape title="Média de Ganhos" content={`R$${json.media_ganho}`} />
          <BoxShape title="Média de Perdas " content={`R$${json.media_perda}`} />
          <BoxShape title="Total de Trades" content={json.total_operacoes} />
          <BoxShape
            title="Tempo méd em trades com lucro"
            content="---"
          />
          <BoxShape
            title="Tempo méd em trades com preju."
            content="---"
          />
          <BoxShape title="Razão tempo méd L/P" content="---" />
          <BoxShape title="Total em Pontos" content={json.total_pontos} />
          <BoxShape title="Méd de ptos por trade" content={json.media_pontos_trade} />
          <BoxShape title="Total em Pontos + qtd" content={json.media_pontos_qtd} />
          <BoxShape title="Méd de ptos por trade + qtd" content="---" />
          <BoxShape
            title="Projeção de L/P próximos 30 dias"
            content="---"
          />
          <BoxShape
            title="Projeção de L/P próximos 100 dias"
            content="---"
          />
          <BoxShape
            title="Projeção de L/P próx. 100 trades"
            content="----"
          />
          <BoxShape
            title="Projeção de L/P próx. 1000 trades"
            content="---"
          />
        </div>
        
        <h2>Métricas Financeiras</h2>
        <div className="shape-content kpis">
          <BoxShape title="Faturamento Líquido" content={`R$${json.lucro_liquido}`} />
          <BoxShape title="Média diária líq" content={`R$${json.media_dia_liq}`} />
          <BoxShape title="Faturamento Bruto" content={`R$${json.lucro_bruto}`} />
          <BoxShape title="Média diária bruto" content={`R$${json.media_dia_bruto}`} />
          <BoxShape title="Lucro líq total" content={`R$${json.lucro_liquido}`} />
          <BoxShape title="Preju. líq total" content="---" />
          <BoxShape title="Lucro brutal total" content={`R$${json.lucro_bruto}`} />
          <BoxShape title="Preju. bruto total" content={`R$${json.perda_bruta}`} />
          <BoxShape title="Saldo em conta" content={`R$${json.lucro_liquido}`} />
          <BoxShape title="Total de Saídas" content="---" />
          <BoxShape title="Total de Entradas" content="----" />
          <BoxShape title="Média líq por trade" content="----" />
        </div>
        <h2>Métricas de Volume</h2>
        <div className="shape-content kpis">
          <BoxShape title="Total de Trades" content={json.total_operacoes} />
          <BoxShape title="Volume Total" content={json.volume_negociado} />
          <BoxShape title="Volume Médio Dia" content={json.volume_medio_dia} />
          <BoxShape title="Posição Média" content={json.volume_posicao_media} />
        </div>
        <h2>Métricas de Custos</h2>
        <div className="shape-content kpis">
          <BoxShape title="Corretagem Total" content="---" />
          <BoxShape title="Corretagem Média Diária" content="---" />
          <BoxShape title="Total em Taxas de negociação" content="---" />
          <BoxShape
            title="Média Diária em Taxas de negociação"
            content="---"
          />
        </div>
      </ResultBox>

      {/* <ResultBox resultTitle="Seu Mês Atual" Icon={SquaresFour}></ResultBox> */}

      <ResultBox resultTitle="Relatório de Progresso Mensal" Icon={SquaresFour}>
        <KpisTable dados={json.mes} />
      </ResultBox>

      <ResultBox 
        resultTitle="Evolução Patrimonial" 
        Icon={SquaresFour} >
        <ChartEvolutionPatrimonial dados={json.evolucao_patrimonial}/>
      </ResultBox>

      <ResultBox
        resultTitle="Pnl Líquido, Bruto e Pontos por Dia"
        Icon={SquaresFour}>
        <ChartPnlLiq/>
      </ResultBox>
    </Section>
  );
}
