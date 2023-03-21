import { ChartBar, SquaresFour } from 'phosphor-react'
import React from 'react'
import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

export function Historical() {
  const conta = 'Todas'
  return (
    <Section sectionName='historical' pageTitle='Histórico'>
      <FilterBox filterTitle='Filtrar'>
        Nenhum filtro para mostrar!
      </FilterBox>
      
      <ResultBox resultTitle={`Relatório diário para conta ${conta}`} Icon={SquaresFour}>
        Nenhum resultado para mostrar!
      </ResultBox>

      <ResultBox resultTitle={`Relatório mensal para conta ${conta}`} Icon={SquaresFour}>
        Nenhum resultado para mostrar!
      </ResultBox>

      <ResultBox resultTitle={`Gráfico de faturamento líquido -  ${conta}`} Icon={ChartBar}>
        Nenhum resultado para mostrar!
      </ResultBox>

      <ResultBox resultTitle={`Gráfico de faturamento líquido mensal -  ${conta}`} Icon={ChartBar}>
        Nenhum resultado para mostrar!
      </ResultBox>
    </Section>
  )
}
