import React from "react";

import "jquery";
import "jquery-ui-dist/jquery-ui";

const Row = ({ record }) => {
  const keys = Object.keys(record[0]);

  return (
    <tr key={record.id}>
      {keys.map((key) => (
        <td key={key}>{record[key]}</td>
      ))}
    </tr>
  );
};

export function DataTables({ data, tableId }) {
  $(document).ready(function () {
    $(`#${tableId}`).DataTable({
      scrollX: true,
      responsive: true,
      autoWidth: true,
      columnDefs: [
        {
          target: 0,
          visible: false,
          searchable: false,
        },
      ],
    });
  });

  const keys = Object.keys(data[0]);

  return (
    <table id={tableId} className="stripe" style={{ width: "100%" }}>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record) => {
          const keysRow = Object.keys(data[0]);

          return (
            <tr key={record.id}>
              {keysRow.map((key) => (
                <td key={key}>{record[key]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
