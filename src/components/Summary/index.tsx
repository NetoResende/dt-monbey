import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer,  } from "./styles";

export function Summary(){
  return (
    <SummaryContainer>
        <SummaryCard>
          <header>
            <span>Entrada</span>
            <ArrowCircleDown size={32} color="#00b37e"/>
          </header>
          <strong>7.000,00</strong>
        </SummaryCard>

        <SummaryCard>
          <header>
            <span>Saída</span>
            <ArrowCircleUp size={32} color="#f75a68"/>
          </header>
          <strong>10.000,00</strong>
        </SummaryCard>

        <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff"/>
          </header>
          <strong>7.000,00</strong>
        </SummaryCard>
    </SummaryContainer>
  )
}