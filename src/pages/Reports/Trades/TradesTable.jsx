import React from "react";
import { getTradesData } from "./getData";

export function TradesTable() {
  getTradesData();
  
  return (
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
  );
}
