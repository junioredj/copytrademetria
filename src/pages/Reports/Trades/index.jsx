import { Gauge } from "phosphor-react";
import React from "react";

import { FilterBox } from "../../../components/Reports/FilterBox";
import { ResultBox } from "../../../components/Reports/ResultBox";
import { Section } from "../../../components/Section";

import { TradesTable } from "./TradesTable";

export function Trades() {
  
  return (
    <Section sectionName="trades" pageTitle="Relatório de Trades">
      <FilterBox filterTitle="Filtre seu Trades">
        Nenhum filtro para mostrar!
      </FilterBox>

      <ResultBox resultTitle="Mostrando todos os Trades" Icon={Gauge}>
        <TradesTable/>
        {/* {data[0] && <DataTables data={data} tableId="table-trade" />} */}
      </ResultBox>
    </Section>
  );
}
