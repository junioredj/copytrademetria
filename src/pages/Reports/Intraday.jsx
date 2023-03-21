import React from 'react'
import { Gauge} from 'phosphor-react';

import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

export function Intraday() {
  return (
    <Section sectionName='intraday' pageTitle='Relatório Daytrader'>
      <FilterBox filterTitle='Filtrar'>
        Nenhum filtro para mostrar!
      </FilterBox>
      
      <ResultBox resultTitle='Mostrando todos os Trades' Icon={Gauge}>
        Nenhum resultado para mostrar!
      </ResultBox>
    </Section>
  )
}
