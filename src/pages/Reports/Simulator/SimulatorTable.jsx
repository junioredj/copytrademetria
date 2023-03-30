import React from "react";

export function SimulatorTable() {
  $(document).ready(function () {
    $("#siulator-table").DataTable({
      data: objeto.trades,
      scrollX: true,
      responsive: true,
      autoWidth: true,
      bDestroy: true,

      // ----- Indices do array de dados usado ------------
      columns: [
        // { data: "codigo" },
        // { data: "lado" },
        // { data: "qty_compra" },
        // { data: "qty_venda" },
        // { data: "preco_compra" },
        // { data: "preco_venda" },
        // { data: "res_bruto" },
        // { data: "corretagem" },
        // { data: "taxas" },
        // { data: "res_liq" },
        // { data: "tags" },
        // { data: "pct" },
        // { data: "opcoes" },
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

  return (
    <table id="simulator-table" className="stripe" style={{ width: "100%" }}>
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
