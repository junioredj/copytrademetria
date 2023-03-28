import { Gauge } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { DataTables } from "../../components/DataTable";

import { FilterBox } from "../../components/Reports/FilterBox";
import { ResultBox } from "../../components/Reports/ResultBox";
import { Section } from "../../components/Section";
import {
  GetTrades,
  getUserLocalStorage,
} from "../../context/AuthProvider/util";

export function Trades() {
  const [data, setData] = useState([{}]);

  var email = getUserLocalStorage().email;

  const dados = GetTrades(email).then((t) => {


    if (t.length > 0) {
      setData(t);
      
      console.log(document.getElementById("table-trade"));
    }

  });



  // console.log(valores, email);

  // const valor = valores;
  // console.log(valor.length);

  // data = valores;



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
