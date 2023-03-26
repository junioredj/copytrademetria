import { ChartBar, SquaresFour } from "phosphor-react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import { FilterBox } from "../../components/Reports/FilterBox";
import { ResultBox } from "../../components/Reports/ResultBox";
import { Section } from "../../components/Section";
import { DataTables } from "../../components/DataTable";

//Fazer a requisição do PHP
import dataTable from "../../components/DataTable/object.json";

export function Historical() {
  const [data, setData] = useState(dataTable);

  const conta = "Principal";

  const seriesLiq = [
    {
      name: "L/P Dia",
      type: "line",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 18.686, -1382.17372727, 71.65, 0, 1062.76027273,
        -92.806, 131.543, -1491.062, -617.54063636, -1022.04518182, 0, 0,
        -231.44, -90.414, -793.12, 0, 0, 0, -350.44, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 26.868, 0, 0, -187.87, 0, 0, 0, 0, 1488.186, 2189.518, 2559.531,
        4110.47159259, 1348.749, 0, 0, 2091.689, 2562.01666667, 0, 0, 0,
        210.45333333, 0, 0, 0, -280.44, 0, 0, 159.56, 0, 0, 1553.224, 358.826,
        0, -62.536, 0, 0, -406.85, -351.45666667, 1214.996, 0, -490.44,
        3174.67105051, 715.49363636, 0, 857.697, 0, 1829.56, 0, -672.414,
        -1033.16, 0, -2847.72, 0, 0, 0, 793.31727273, 0, 0, 0, 0, 0,
        933.13627273, 0, 0, -3192.77842857, 3616.03890909, 831.358,
        275.08267532, 681.819, 3610.03990909, 4898.10279798, -2217.81,
        -1770.853,
      ],
    },
    {
      name: "Saldo",
      type: "area",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 18.686, -1363.48772727, -1291.83772727,
        -1291.83772727, -229.07745454, -321.88345454, -190.34045454,
        -1681.40245454, -2298.9430909, -3320.98827272, -3320.98827272,
        -3320.98827272, -3552.42827272, -3642.84227272, -4435.96227272,
        -4435.96227272, -4435.96227272, -4435.96227272, -4786.40227272,
        -4786.40227272, -4786.40227272, -4786.40227272, -4786.40227272,
        -4786.40227272, -4786.40227272, -4786.40227272, -4786.40227272,
        -4786.40227272, -4786.40227272, -4786.40227272, -4759.53427272,
        -4759.53427272, -4759.53427272, -4947.40427272, -4947.40427272,
        -4947.40427272, -4947.40427272, -4947.40427272, -3459.21827272,
        -1269.70027272, 1289.83072728, 5400.30231987, 6749.05131987,
        6749.05131987, 6749.05131987, 8840.74031987, 11402.75698654,
        11402.75698654, 11402.75698654, 11402.75698654, 11613.21031987,
        11613.21031987, 11613.21031987, 11613.21031987, 11332.77031987,
        11332.77031987, 11332.77031987, 11492.33031987, 11492.33031987,
        11492.33031987, 13045.55431987, 13404.38031987, 13404.38031987,
        13341.84431987, 13341.84431987, 13341.84431987, 12934.99431987,
        12583.5376532, 13798.5336532, 13798.5336532, 13308.0936532,
        16482.76470371, 17198.25834007, 17198.25834007, 18055.95534007,
        18055.95534007, 19885.51534007, 19885.51534007, 19213.10134007,
        18179.94134007, 18179.94134007, 15332.22134007, 15332.22134007,
        15332.22134007, 15332.22134007, 16125.5386128, 16125.5386128,
        16125.5386128, 16125.5386128, 16125.5386128, 16125.5386128,
        17058.67488553, 17058.67488553, 17058.67488553, 13865.89645696,
        17481.93536605, 18313.29336605, 18588.37604137, 19270.19504137,
        22880.23495046, 27778.33774844, 25560.52774844, 23789.67474844,
      ],
    },
  ];

  const optionsLiq = {
    chart: {
      height: 351,
      type: "line",
      zoom: { enabled: 1 },
      toolbar: { show: 1 },
    },
    stroke: { curve: "smooth", width: 2 },
    fill: { opacity: 1 },

    labels: [
      "30/01/20",
      "07/02/20",
      "27/02/20",
      "28/02/20",
      "05/03/20",
      "06/03/20",
      "09/03/20",
      "18/03/20",
      "19/03/20",
      "20/03/20",
      "23/03/20",
      "24/03/20",
      "26/03/20",
      "02/04/20",
      "09/04/20",
      "13/04/20",
      "12/05/20",
      "02/06/20",
      "15/06/20",
      "19/06/20",
      "23/06/20",
      "29/06/20",
      "07/07/20",
      "31/07/20",
      "04/08/20",
      "06/08/20",
      "07/08/20",
      "12/08/20",
      "17/08/20",
      "20/08/20",
      "24/08/20",
      "25/08/20",
      "01/09/20",
      "03/09/20",
      "08/09/20",
      "09/09/20",
      "17/09/20",
      "21/09/20",
      "22/09/20",
      "24/09/20",
      "29/09/20",
      "02/10/20",
      "07/10/20",
      "28/10/20",
      "29/10/20",
      "30/10/20",
      "09/11/20",
      "17/11/20",
      "24/11/20",
      "07/12/20",
      "18/12/20",
      "23/12/20",
      "28/12/20",
      "12/01/21",
      "19/01/21",
      "26/01/21",
      "04/02/21",
      "22/02/21",
      "26/02/21",
      "01/03/21",
      "02/03/21",
      "03/03/21",
      "09/03/21",
      "12/03/21",
      "16/03/21",
      "18/03/21",
      "23/03/21",
      "26/03/21",
      "29/03/21",
      "30/03/21",
      "31/03/21",
      "01/04/21",
      "15/04/21",
      "22/04/21",
      "03/05/21",
      "05/05/21",
      "26/05/21",
      "28/05/21",
      "01/06/21",
      "07/06/21",
      "09/06/21",
      "07/07/21",
      "13/07/21",
      "15/07/21",
      "30/07/21",
      "02/08/21",
      "03/08/21",
      "12/08/21",
      "17/08/21",
      "19/08/21",
      "10/09/21",
      "22/09/21",
      "04/10/21",
      "19/10/21",
      "22/10/21",
      "04/11/21",
      "09/11/21",
      "16/11/21",
      "30/11/21",
      "02/12/21",
      "15/12/21",
      "16/12/21",
      "23/12/21",
      "26/01/22",
      "27/01/22",
      "01/02/22",
      "11/02/22",
      "21/02/22",
      "23/02/22",
      "05/10/22",
      "17/11/22",
      "//",
    ],

    markers: { size: 0 },
    colors: ["#3688fc", "#42d29d"],
    legend: {
      labels: {
        colors: "#fff",
      },
    },
    xaxis: {
      labels: { style: { colors: "#aab8c5" } },
      tooltip: { style: { colors: "#aab8c5" } },
    },
    yaxis: [
      {
        title: { text: "R$" },
        labels: {
          formatter: function (o) {
            return void 0 !== o ? "R$" + o.toFixed(2) : o;
          },
          style: { colors: "#aab8c5" },
        },
      },
    ],
    tooltip: {
      shared: !0,
      intersect: !1,
      y: {
        formatter: function (o) {
          return void 0 !== o ? "R$" + o.toFixed(2) : o;
        },
      },
    },
    grid: {
      row: { colors: ["transparent", "transparent"], opacity: 0.2 },
      borderColor: "#aab8c5",
    },
    legend: { fontSize: "14px", fontFamily: "14px", offsetY: -10 },
    responsive: [
      {
        breakpoint: 600,
        options: { yaxis: { show: !1 }, legend: { show: !1 } },
      },
    ],
  };

  const seriesMes = [
    {
      name: "Res Líq",
      data: [
        0.0, 0.0, -229.07745454, -1452.325, -617.54063636, -1343.89918182,
        -793.12, -350.44, 26.868, -187.87, 6237.235, 5459.22059259,
        4653.70566667, 210.45333333, 1791.17, -62.536, 456.68933333,
        3399.72468687, 2687.257, -4553.294, 0.0, 793.31727273, 0.0,
        -2259.64215584, 4447.39690909, 9465.04438239, -2217.81, -1770.853,
      ],
    },
    {
      name: "Res Bruto",
      data: [
        0.0, 0.0, -202.54545454, -1446.32, -616.36363636, -1338.33818182,
        -791.76, -350.0, 29.2, -186.0, 6262.25, 5474.79259259, 4664.66666667,
        231.03333333, 1798.0, -56.0, 476.08333333, 3417.46868687, 2692.0,
        -4549.0, 0.0, 799.72727273, 0.0, -2247.84415584, 4465.09090909,
        9521.24538239, -2212.0, -1765.0,
      ],
    },
  ];
  const optionsMes = {
    chart: {
      height: 380,
      type: "bar",
      zoom: {
        enabled: 1,
      },
      toolbar: {
        show: 1,
      },
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -10000000,
              to: -0,
              color: "#fa5c7c",
            },
          ],
        },
        columnWidth: "80%",
      },
    },
    dataLabels: {
      enabled: !1,
    },
    colors: ["#3688fc", "#42d29d"],
    annotations: {
      yaxis: [
        {
          y: 10500,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "Meta Mensal R$10.500,00",
          },
        },
      ],
    },
    xaxis: {
      labels: { style: { colors: "#aab8c5" } },
      tooltip: { style: { colors: "#aab8c5" } },

      categories: [
        "1/2020",
        "2/2020",
        "3/2020",
        "4/2020",
        "5/2020",
        "6/2020",
        "7/2020",
        "8/2020",
        "9/2020",
        "10/2020",
        "11/2020",
        "12/2020",
        "1/2021",
        "2/2021",
        "3/2021",
        "4/2021",
        "5/2021",
        "6/2021",
        "7/2021",
        "8/2021",
        "9/2021",
        "10/2021",
        "11/2021",
        "12/2021",
        "1/2022",
        "2/2022",
        "10/2022",
        "11/2022",
      ],
    },
    legend: {
      offsetY: -10,
    },
    yaxis: [
      {
        title: {
          text: "R$",
        },
        labels: {
          formatter: function (o) {
            return void 0 !== o ? "R$" + o.toFixed(2) : o;
          },
          style: { colors: "#aab8c5" },
        },
      },
    ],
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.2,
      },
      borderColor: "#f1f3fa",
    },
  };

  return (
    <Section sectionName="historical" pageTitle="Histórico">
      <FilterBox filterTitle="Filtrar">
        <form className="filter-form">
          <div className="row">
            <select name="select-date" id="select-date">
              <option value="hoje">Hoje</option>
              <option value="ontem">Ontem</option>
              <option value="sete-dias">Últimos 7 dias</option>
              <option value="trinta-dias">Últimos 30 dias</option>
              <option value="mes">Este mês</option>
              <option value="mes-anterior">Mês Anterior</option>
              <option value="ano">Este ano</option>
              <option value="tudo">Tudo</option>
            </select>

            <select name="select-conta" id="select-conta">
              <option value=""></option>
              <option value="principal">Principal</option>
            </select>

            <button className="btn-primary" type="submit">
              Filtrar
            </button>
            <button>Limpar</button>
          </div>
        </form>
      </FilterBox>

      <ResultBox
        resultTitle={`Relatório diário para conta ${conta}`}
        Icon={SquaresFour}
      >
        <DataTables data={data} tableId="table-historical-dia" />
      </ResultBox>

      <ResultBox
        resultTitle={`Relatório mensal para conta ${conta}`}
        Icon={SquaresFour}
      >
        <DataTables data={data} tableId="table-historical-mes" />
      </ResultBox>

      <ResultBox
        resultTitle={`Gráfico de faturamento líquido -  ${conta}`}
        Icon={ChartBar}
      >
        <Chart
          options={optionsLiq}
          series={seriesLiq}
          type="line"
          height={350}
        />
      </ResultBox>

      <ResultBox
        resultTitle={`Gráfico de faturamento líquido mensal -  ${conta}`}
        Icon={ChartBar}
      >
        <Chart
          options={optionsMes}
          series={seriesMes}
          type="bar"
          height={350}
        />
      </ResultBox>
    </Section>
  );
}
