import React from "react";
import { Faders, Gauge } from "phosphor-react";

import { ResultBox } from "../../../components/Reports/ResultBox";
import { Section } from "../../../components/Section";

export function Watchlist() {
  return (
    <Section sectionName="watchlist" pageTitle="Lista de Ativo">
      <div className="card-box">
        <div className="box-title">
          <Faders size={16} color="#fdfcfc" weight="fill" />
          <h6>Filtrar</h6>
        </div>
        <div className="box-content">
          content
        </div>
      </div>

      <ResultBox resultTitle="Lista de Ativos" Icon={Gauge}>
        Você não tem nenhuma lista de Ativos ou nenhuma lista foi selecionada.
      </ResultBox>
    </Section>
  );
}
