import React, { useEffect, useRef } from 'react'

export function 
Calendar({mes, ano, dados}) {
    var data = dados;
    // [
    //     {
    //         dia: 1,
    //         resultado: -1765.00,
    //         quantidade: 1000.00,
    //         trades: 1,
    //         mensagem: "Perda máxima atingida"
    //     },
    //     {
    //         dia: 18,
    //         resultado: -1765.00,
    //         quantidade: 1000.00,
    //         trades: 1,
    //         mensagem: "Perda máxima atingida"
    //     },
    //     {
    //         dia: 29,
    //         resultado: -1765.00,
    //         quantidade: 1000.00,
    //         trades: 1,
    //         mensagem: "Perda máxima atingida"
    //     }
    // ]

    

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
                if(i > 0 && i < getLastDayThisMonth && dt === dia.dia){

                    let info = `<span>
                                    <p>Resultado: R$ ${dia.resultado}</p>
                                    <p>Quantidade: ${dia.quantidade}</p>
                                    <p>Trades: ${dia.trades}</p>
                                    <small>${dia.mensagem}</small>
                                </span>`;
                    dayTables.innerHTML += info;
                    if(parseFloat(dia.resultado) > 0)
                        dayTables.classList.add('result-positive')
                    else
                    {
                        dayTables.classList.add('result-negative')
                    }
                }
            });
        };
    }

    useEffect( () => {
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
