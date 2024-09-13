import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyeld } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyeld/>
        <TransactionsProvider>
          <Transactions/>
        </TransactionsProvider>
    </ThemeProvider>
  )
}