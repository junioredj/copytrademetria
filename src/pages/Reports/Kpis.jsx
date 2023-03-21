import { Gauge } from 'phosphor-react'
import React from 'react'
import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

export function Kpis() {
  return (
    <Section sectionName='kpis' pageTitle='Relatório de Desempenho'>
      <FilterBox filterTitle='Filtrar'>
        Nenhum filtro para mostrar!
      </FilterBox>
      
      <ResultBox resultTitle='Mostrando todos os Trades' Icon={Gauge}> 
        Nenhum resultado para mostrar!
      </ResultBox>
    </Section>
  )
}
