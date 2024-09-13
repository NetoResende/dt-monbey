import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}
export interface TransactionsContextType {
  transactions: TransactionsProps[];
}

interface TransactionsProviderProps{
  children: ReactNode;
}
export const TransactionsContext = createContext({} as TransactionsContextType)


export function TransactionsProvider ({ children }: TransactionsProviderProps){

  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  async function LoadTransaction() {
    const response = await fetch("http://localhost:3000/transactrions");
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    LoadTransaction()
  }, []);
  return (
   <TransactionsContext.Provider value={{ transactions }}>
       { children }
   </TransactionsContext.Provider>
  )
}