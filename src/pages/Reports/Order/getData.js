import React, { useEffect, useState } from "react";
import { getUserLocalStorage } from "../../../context/AuthProvider/util";
import { Api } from "../../../services/api";

export function getOrderData() {
  const [data, setData] = useState([]);

  var email = getUserLocalStorage().email;

  //Buscando dados da api
  async function getTrades() {
    const res = await Api.get("listar-operacoes.php?email=" + email).then(
      (response) => setData(response.data)
    );
    return res;
  }

  useEffect(() => {
    getTrades();
  }, []);

  //Conf do DataTables
  $(document).ready(function () {
    $("#order-table").DataTable({
      data: data,
      /*ajax: {
        //recomendado Variaveis ambientes
        url:  "https://tradersdash.com.br/api/listar-operacoes.php?email=kevinwilliam@gmail.com",
        type: "GET",
        dataSrc: "",
      },*/
      scrollX: true,
      responsive: true,
      autoWidth: true,
      bDestroy: true,
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

      columnDefs: [
        {
          target: 12,
          visible: false,
          searchable: false,
        },
      ],
    });
  });
}
