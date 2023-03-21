import React from 'react'   

import 'jquery'
import 'jquery-ui-dist/jquery-ui'



export function DataTables({data, tableId}) {

    $(document).ready(function () {
        $(`#${tableId}`).DataTable({
            scrollX: true,
            responsive: true,
            autoWidth: true,
            
            
        });
    });

  return (
    <table id={tableId} className="stripe" style={{width: '100%'}}>
        <thead>
            <tr>
                <th>Dt Abertura</th>
                <th>Dt Encerramento</th>
                <th>Código</th>
                <th>Lado</th>
                <th>Qty Compra</th>
                <th>Qty Venda</th>
                <th>Preço Compra</th>
                <th>Preço Venda</th>
                <th>Res Bruto</th>
                <th>Corretagem</th>
                <th>Taxas</th>
                <th>Res Líq</th>
                <th>Tags</th>
                <th>Pct %</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map( (item) => {
                    return (<tr key={item.id}>
                        <td>{item.dt_abertura}</td>
                        <td>{item.dt_fechamento}</td>
                        <td>{item.codigo}</td>
                        <td>{item.lado}</td>
                        <td>{item.qty_compra}</td>
                        <td>{item.qty_venda}</td>
                        <td>{item.preco_compra}</td>
                        <td>{item.preco_venda}</td>
                        <td>{item.res_bruto}</td>
                        <td>{item.corretagem}</td>
                        <td>{item.taxas}</td>
                        <td>{item.res_liq}</td>
                        <td>{item.tags}</td>
                        <td>{item.pct}</td>
                        <td>{item.opcoes}</td>
                    </tr>)
                })
            }
        </tbody>
    </table>
  )
}
