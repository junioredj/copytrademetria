import React from "react";

import "jquery";
import "jquery-ui-dist/jquery-ui";

export function DataTables({ data, tableId }) {
  $(document).ready(function () {
    $(`#${tableId}`).DataTable({
      // data: data,
      ajax: {
        //recomendado Variaveis ambientes
        url: "https://tradersdash.com.br/api/listar-operacoes.php?email=kevinwilliam@gmail.com",
        type: "GET",
        dataSrc: "",
      },

      scrollX: true,
      responsive: true,
      autoWidth: true,

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

      columnDefs: [
        {
          target: 12,
          visible: false,
          searchable: false,
        },
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

      bDestroy: true,

    });
  });

  return (
    <table id={tableId} className="stripe" style={{ width: 100 + "%" }}>
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
