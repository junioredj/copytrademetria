import React from 'react'
import { Gauge} from 'phosphor-react';

import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

export function Adjustments() {
  return (
    <Section sectionName='adjustments' pageTitle='Lançamentos'>
      <FilterBox filterTitle='Filtrar'>
        Nenhum filtro para mostrar!
      </FilterBox>
      
      <ResultBox resultTitle='Mostrando todos os Lançamentos' Icon={Gauge}>
        Nenhum resultado para mostrar!
      </ResultBox>
    </Section>
  )
}
