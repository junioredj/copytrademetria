import { CaretDown, SquaresFour } from 'phosphor-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function DropdownReports() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`dropdown-reports ${isOpen? 'open' : ''}`}>
        <div 
            className="dropdown-title" 
            onMouseUp={ () => setIsOpen(!isOpen)} 
        >

            <div>
                <SquaresFour size={20} />
                <span>Relatórios</span>
            </div>
            <div className="dropdown-icon">
                <CaretDown size={20} />
            </div>
        </div>
        <div 
            className="dropdown-menu" 
            onMouseLeave={() => setIsOpen(!isOpen)}
        >
            <Link to="/relatorios/trades" >Relatório de Trades</Link>
            <Link to="/relatorios/ordens" >Relatório de Ordens</Link>
            <Link to="/relatorios/desempenho" > Relatório de Desempenho </Link>
            <Link to="/relatorios/simulador" > Simulador de Resultados </Link>
            <Link to="/relatorios/historico" > Histórico de Desempenho</Link>
            <Link to="/relatorios/portfolio" > Minha Custódia</Link>
            <Link to="/relatorios/daytrader" > Relatório DayTrader</Link>
            <Link to="/relatorios/lancamentos" > Relatório de Lançamentos </Link>
            <Link to="/relatorios/calendario-trades" > Calendário de Trades </Link>
            <Link to="/relatorios/ativos" > Lista de Ativos </Link>
        </div>
    </div>
  )
}
