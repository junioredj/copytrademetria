import { Gauge } from "phosphor-react";
import React, { useState } from "react";
import { FilterBox } from "../../components/Reports/FilterBox";
import { ResultBox } from "../../components/Reports/ResultBox";
import { Section } from "../../components/Section";

import { DataTables } from "../../components/DataTable";
import {
  GetTrades,
  getUserLocalStorage,
} from "../../context/AuthProvider/util";

export function Order() {
  const [data, setData] = useState([]);

  const dados = GetTrades(getUserLocalStorage().email);

  dados.then((t) => {
    setData(t);
  });

  console.log(data)

  return (
    <Section sectionName="orders" pageTitle="Relatório de Ordens">
      <FilterBox filterTitle="Filtre suas Ordens">
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

            <select name="select-type" id="select-type">
              <option value="">Tipo</option>
              <option value="day-trader">Day Trader</option>
              <option value="swing-trader">Swing Trader</option>
              <option value="ambas">Ambas</option>
            </select>

            <select name="select-lado" id="select-lado">
              <option value="">lado</option>
              <option value="compra">Compra</option>
              <option value="venda">Venda</option>
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
            <select name="select-meio" id="select-meio">
              <option value="">Meios</option>
              <option value="binance">Binance</option>
              <option value="b3">B3</option>
              <option value="clear">Clear</option>
            </select>
          </div>

          <div className="row">
            <input type="text" placeholder="Subjacente" />
            <select name="select-row-3" id="select-row-3">
              <option value="backratio">Backratio</option>
              <option value="bear-call">Bear call</option>
              <option value="bear-put">Bear Put</option>
            </select>
            <input type="text" placeholder="Prc de Venc." />
            <input type="date" placeholder="Dt de Venc." />
            <select name="select-operaction" id="select-operation">
              <option value="">Tipo de Operação</option>
              <option value="call">Call</option>
              <option value="put">Put</option>
            </select>

            <button className="btn-primary" type="submit">
              Filtrar
            </button>
            <button>Limpar</button>
          </div>
        </form>
      </FilterBox>

      <ResultBox resultTitle="Mostrando todas as Ordens" Icon={Gauge}>
        <DataTables data={data} tableId="table-orders" />
      </ResultBox>
    </Section>
  );
}
