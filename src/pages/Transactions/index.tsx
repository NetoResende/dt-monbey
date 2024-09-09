import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHignLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
  return (
    <div>
      <Header/>
      <Summary/>

     <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
            <tbody>
              <tr>
                <td width="50%">Desenvolvimento de site</td>
                <td>
                  <PriceHignLight variant="income">
                    12.00,00
                  </PriceHignLight>
                </td>
                <td>Venda</td>
                <td>22/04/2024</td>
              </tr>
              <tr>
                <td width="50%">Hamburger</td>
                <td>
                  <PriceHignLight variant="outcome">
                    -18.00,00
                  </PriceHignLight>
                </td>
                <td>Venda</td>
                <td>10/04/2024</td>
              </tr>
            </tbody>
          </TransactionsTable>
     </TransactionsContainer>
    </div>
  )
}