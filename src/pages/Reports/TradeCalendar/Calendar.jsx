import React, { useEffect, useRef } from 'react'

export function Calendar({mes, ano}) {
    const data = [2, 12, 26, 30];

    const monthsBr = ['Janeiro', 'Fevereiro', 'Março', 'Abril','Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outrubro', 'Novembro', 'Dezembro'];
    const tableDays = useRef(null);
    const monthCurrent = useRef();
    const yearCurrent = useRef();

    function GetDaysCalendar(mes, ano){
        monthCurrent.current.innerHTML = monthsBr[mes];
        yearCurrent.current.innerHTML = ano;

        let firstDaysOfWeek = new Date(ano, mes,0).getDay();
        let getLastDayThisMonth = new Date(ano, mes + 1,0).getDate();
        
        for(var i = -firstDaysOfWeek, index = 0; i < (35-firstDaysOfWeek); i++, index++){
            
            let dt = new Date(ano,mes,i).getDate();
            const dayTables = tableDays.current.getElementsByTagName('td')[index];

            //Resetar classes para o valor inicial
            dayTables.classList.remove('mes-anterior');
            dayTables.classList.remove('proximo-mes');
            dayTables.classList.remove('result-negative');
            
            dayTables.innerHTML = dt;

            if(i < 1){  dayTables.classList.add('mes-anterior');}
            if(i > getLastDayThisMonth){ dayTables.classList.add('proximo-mes');}


            data.map(dia => {
                if(i > 1 && i < getLastDayThisMonth && dt === dia){
            console.log(new Date())

                    let info = `<span>
                                    <p>Resultado: R$-1.765,00</p>
                                    <p>Quantidade: 1.000,00</p>
                                    <p>Trades: 1</p>
                                    <small>Perda máxima atingida</small>
                                </span>`;
                    dayTables.innerHTML += info;
                    dayTables.classList.add('result-negative')
                }
            });
        };
    }

    useEffect( () => {
        console.log('Atualizou')
        GetDaysCalendar(mes-1,ano);
    } ,[mes, ano, monthCurrent]);


  return (
    <div className='calendar'>
        <h4>Mês de <span ref={monthCurrent}></span> de <span ref={yearCurrent}></span></h4>

        <div className="table-calendar">
            <table className="table">
                <thead>
                    <tr>
                        <th>D</th>
                        <th>S</th>
                        <th>T</th>
                        <th>Q</th>
                        <th>Q</th>
                        <th>S</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody ref={tableDays}>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}