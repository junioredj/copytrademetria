import React from "react";

export function HistoricalTable({dados, tableId}) {

  $(document).ready(function () {
    $(`#${tableId}`).DataTable({
        data: [],
        // ajax: {
          //recomendado Variaveis ambientes
        //   url:  "",
        //   type: "GET",
        //   dataSrc: "",
        // },
        
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
  
        //------- Ocutar Colunas -------
        // columnDefs: [
        //   {
        //     target: 12,
        //     visible: false,
        //     searchable: false,
        //   },
        // ],
      });
    });




  return (

    <table id={tableId} className="stripe" width={"100%"}>
      <thead>
        <tr>
          <th>Data</th>
          <th>L/P Líq</th>
          <th>L/P Bruto</th>
          <th>% de acerto</th>
          <th>Fator Lucro</th>
          <th>Volume</th>
          <th>Total em Pontos</th>
          <th>Trades</th>
          <th>Posição Média</th>
        </tr>
      </thead>
      <tbody>
        {

          typeof dados === "undefined"? "": Object.keys(dados).map((innerAttr, index) => {
            return (
            <tr><td>{dados[innerAttr].label}</td><td>{`R$${dados[innerAttr].lucro_liquido}`}</td><td>{`R$${dados[innerAttr].lucro_bruto}`}</td><td>{`${dados[innerAttr].acerto}`}</td><td>{`${dados[innerAttr].fator_lucro}`}</td><td>{dados[innerAttr].volume}</td><td>{dados[innerAttr].pontos}</td><td>{dados[innerAttr].trades}</td><td>---</td></tr>
          )})
            
        }
      </tbody>
    </table>
  );
}
