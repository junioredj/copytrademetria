import React from 'react'
import {SquaresFour } from 'phosphor-react';

import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

export function Portfolio() {
  const conta = 'Todas';
  return (
    <Section sectionName='portfolio' pageTitle='Minha Custódia'>
      <FilterBox filterTitle='Filtrar'>
        Nenhum filtro para mostrar!
      </FilterBox>

      <ResultBox resultTitle={`POSIÇÕES EM ABERTO PARA CONTA ${conta}`} Icon={SquaresFour}>
        Nenhum resultado para mostrar!
      </ResultBox>

      <div className="chart-content-portfolio"> 
        <ResultBox resultTitle='Exposição por tipo de investimento' Icon={SquaresFour}>
          Nenhum resultado para mostrar!
        </ResultBox>
        <ResultBox resultTitle='Exposição por lado' Icon={SquaresFour}>
          Nenhum resultado para mostrar!
        </ResultBox>
      </div>
    </Section>
  )
}
