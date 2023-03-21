import React from 'react'
import { Gauge, SquaresFour } from 'phosphor-react';

import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

export function Simulator() {
  return (
    <Section sectionName='simulator' pageTitle='Simulador de Resulatados'>
      <FilterBox filterTitle='Filtrar'>
        Nenhum filtro para mostrar!
      </FilterBox>
      
      <ResultBox resultTitle='Grafico de Resultados' Icon={Gauge}>
        Nenhum resultado para mostrar!
      </ResultBox>

      <ResultBox resultTitle='Grafico de Resultados' Icon={SquaresFour}>
        Nenhum resultado para mostrar!
      </ResultBox>
    </Section>
  )
}
