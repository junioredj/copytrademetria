import React from 'react'
import {Faders, SquaresFour} from 'phosphor-react';

import { FilterBox } from '../../../components/Reports/FilterBox'
import { ResultBox } from '../../../components/Reports/ResultBox'
import { Section } from '../../../components/Section'
import { Calendar } from './Calendar';
import { useForm } from 'react-hook-form';

export function TradeCalendar() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function FilterSubmit(){
    const promisse = await new Promise ( (resolver) => 
      setTimeout( () => {
        resolver('helo')
        console.log('filtrou')
      }, 1000)
    );

  }

  const conta = "Principal";

  return (
    <Section sectionName='trade-calendar' pageTitle='Calendário de Trades'>
      <div className="filter">
        <div className="card-box ">
          <div className="box-title">
            <Faders size={16} color="#fdfcfc" weight="fill" />
            <h6>Filtrar</h6>
          </div>
          <div className="box-content">
            <form onSubmit={handleSubmit(FilterSubmit)} className='filter-form' action="">
              <div className="row">
                <select name="select-date" id="select-date" {...register("date")}>
                  <option value="hoje">Hoje</option>
                  <option value="ontem">Ontem</option>
                  <option value="sete-dias">Últimos 7 dias</option>
                  <option value="trinta-dias">Últimos 30 dias</option>
                  <option value="mes">Este mês</option>
                  <option value="mes-anterior">Mês Anterior</option>
                  <option value="ano">Este ano</option>
                  <option value="tudo">Tudo</option>
                </select>

                <select
                  name="select-conta"
                  id="select-conta"
                  {...register("conta")}
                >
                  <option value="contas">Todas as Contas</option>
                  <option value="principal">Principal</option>
                </select>

                <button
                  disabled={isSubmitting}
                  className="btn-primary"
                  type="submit"
                >
                  {isSubmitting ? "Filtrando..." : "Filtrar"}
                </button>
                <button onClick={() => reset()}>Limpar</button>

              </div>
            </form>
          </div>
        </div>
      </div>
      
      <ResultBox resultTitle={`Calendário de Trades para conta ${conta}`} Icon={SquaresFour}>
        <Calendar mes={5} ano={2023}/>
      </ResultBox>
    </Section>
  )
}
