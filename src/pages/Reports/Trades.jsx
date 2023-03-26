import { Gauge } from "phosphor-react";
import React, { useState } from "react";
import { DataTables } from "../../components/DataTable";

import { FilterBox } from "../../components/Reports/FilterBox";
import { ResultBox } from "../../components/Reports/ResultBox";
import { Section } from "../../components/Section";
import {
  GetTrades,
  getUserLocalStorage,
} from "../../context/AuthProvider/util";

export function Trades() {
  const [data, setData] = useState([]);

  const dados = GetTrades(getUserLocalStorage().email);

  dados.then((t) => {
    setData(t);
  });

  console.log(dados)

  return (
    <Section sectionName="trades" pageTitle="Relatório de Trades">
      <FilterBox filterTitle="Filtre seu Trades">
        Nenhum filtro para mostrar!
      </FilterBox>

      <ResultBox resultTitle="Mostrando todos os Trades" Icon={Gauge}>
        <DataTables data={data} tableId="table-trade" />
      </ResultBox>
    </Section>
  );
}
