import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer,  } from "./styles";
import { preciFormatter } from "../../Utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary(){
 
  const summary = useSummary()
  return (
    <SummaryContainer>
        <SummaryCard>
          <header>
            <span>Entrada</span>
            <ArrowCircleDown size={32} color="#00b37e"/>
          </header>
          <strong>{preciFormatter.format(summary.income)}</strong>
        </SummaryCard>

        <SummaryCard>
          <header>
            <span>Saída</span>
            <ArrowCircleUp size={32} color="#f75a68"/>
          </header>
          <strong>
            {preciFormatter.format(summary.outcome)}
            </strong>
        </SummaryCard>

        <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff"/>
          </header>
          <strong>{preciFormatter.format(summary.total)}</strong>
        </SummaryCard>
    </SummaryContainer>
  )
}