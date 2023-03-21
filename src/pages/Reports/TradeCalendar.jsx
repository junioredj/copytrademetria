import React from 'react'
import {SquaresFour} from 'phosphor-react';

import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

export function TradeCalendar() {
  const conta = "Principal";
  return (
    <Section sectionName='trade-calendar' pageTitle='Calendário de Trades'>
      <FilterBox filterTitle='Filtrar'>
        Nenhum filtro para mostrar!
      </FilterBox>
      
      <ResultBox resultTitle={`Calendário de Trades para conta ${conta}`} Icon={SquaresFour}>
        Nenhum resultado para mostrar!
      </ResultBox>
    </Section>
  )
}
