import React from 'react'
import {Gauge} from 'phosphor-react';

import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

export function Watchlist() {
  return (
    <Section sectionName='watchlist' pageTitle='Lista de Ativo'>
      <FilterBox filterTitle='Filtrar'>
        Nenhum filtro para mostrar!
      </FilterBox>
      
      <ResultBox resultTitle='Lista de Ativos' Icon={Gauge}>
        Nenhum resultado para mostrar!
      </ResultBox>
    </Section>
  )
}
