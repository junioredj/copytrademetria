import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import {SquaresFour } from 'phosphor-react';

import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'
import { DataTables } from '../../components/DataTable';

//Fazer a requisição do PHP
import dataTable from '../../components/DataTable/object.json'

export function Portfolio() {
  const [data, setData] = useState(dataTable);

  const seriesType = [21061.071429, 2728.6];
  const optionsType = {
    chart: {
      width: 380,
      type: 'pie',
      toolbar: {show: 1},
    },
    labels: ['Ações','Dinheiro'],
    colors: ['#3688fc','#6c757d'],
    stroke: {show: false},
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: -10
    },
    tooltip: {
      shared: !0, intersect: !1, y: {
        formatter: function (o) {
            return void 0 !== o ? "R$" + o.toFixed(2) : o
        }
      }
    },
    responsive: [{
      breakpoint: 600,
      options: {
        chart: {
          width: 240
        },
        legend: {
          show: 1
        }
      }
    }],
  };

  const seriesLado = [11159.57, 9901.5];
  const optionsLado = {
    chart: {
      width: 380,
      type: 'pie',
      toolbar: {show: 1},
    },
    labels: ['Comprado','Vendido'],
    colors: ['#3688fc','#6c757d'],
    stroke: {show: false},
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: -10
    },
    tooltip: {
      shared: !0, intersect: !1, y: {
        formatter: function (o) {
            return void 0 !== o ? "R$" + o.toFixed(2) : o
        }
      }
    },
    responsive: [{
      breakpoint: 600,
      options: {
        chart: {
          width: 240
        },
        legend: {
          show: 1
        }
      }
    }],
  };

  const conta = 'Todas';
  return (
    <Section sectionName='portfolio' pageTitle='Minha Custódia'>
      <FilterBox filterTitle='Filtrar'>
        Nenhum filtro para mostrar!
      </FilterBox>

      <ResultBox resultTitle={`POSIÇÕES EM ABERTO PARA CONTA ${conta}`} Icon={SquaresFour}>
        <DataTables data={data} tableId="table-portfolio" />
      </ResultBox>

      <div className="chart-content-portfolio"> 
        <ResultBox resultTitle='Exposição por tipo de investimento' Icon={SquaresFour}>
          <Chart options={optionsType} series={seriesType} type='pie' width={350}/>
        </ResultBox>
        <ResultBox resultTitle='Exposição por lado' Icon={SquaresFour}>
          <Chart options={optionsLado} labels="la, ld" series={seriesLado} type='pie' width={350}/>
        </ResultBox>
      </div>
    </Section>
  )
}
