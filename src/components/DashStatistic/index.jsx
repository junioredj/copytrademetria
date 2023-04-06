import IconStatistic from '../../img/Icon.png';

export function DashStatistic (fator){
    
    return (
        <div className="dash-statistic">
            <div className="box-statistic">
                <div className="statistic">
                    <span>Fator de Lucro</span>
                    <strong>{fator.fator}</strong>
                    <div className="box-info">
                        <span>Bom</span>
                        <span>Aumente seu capital</span>
                    </div>
                </div>
                <div className="icon-statistic">
                    <img src={IconStatistic} />
                </div>
            </div>
            <div className="box-statistic">
                <div className="statistic">
                    <span>Fator de Lucro</span>
                    <strong>{fator.fator}</strong>
                    <div className="box-info">
                        <span>Bom</span>
                        <span>Aumente seu capital</span>
                    </div>
                </div>
                <div className="icon-statistic">
                    <img src={IconStatistic} />
                </div>
            </div>
            <div className="box-statistic">
                <div className="statistic">
                    <span>Fator de Lucro</span>
                    <strong>{fator.fator}</strong>
                    <div className="box-info">
                        <span>Bom</span>
                        <span>Aumente seu capital</span>
                    </div>
                </div>
                <div className="icon-statistic">
                    <img src={IconStatistic} />
                </div>
            </div>
            <div className="box-statistic">
                <div className="statistic">
                    <span>Fator de Lucro</span>
                    <strong>{fator.fator}</strong>
                    <div className="box-info">
                        <span>Bom</span>
                        <span>Aumente seu capital</span>
                    </div>
                </div>
                <div className="icon-statistic">
                    <img src={IconStatistic} />
                </div>
            </div>
        </div>
    );
}