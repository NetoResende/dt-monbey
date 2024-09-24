import { ReactNode, useEffect, useState, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface TransactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionsInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}
export interface TransactionsContextType {
  transactions: TransactionsProps[];
  fetchTransaction: (query?: string) => Promise<void>;
  createTransactions: (data: CreateTransactionsInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}
export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  const fetchTransaction = useCallback(
    async (query?: string) => {
      const response = await api.get("transactrions", {
        params: {
          _sort: "createdAt",
          _order: "desc",
          description_like: query,
        },
      });
  
      setTransactions(response.data);
    }, []
  )

  const createTransactions = useCallback(
    async (data: CreateTransactionsInput) => {
      const { description, price, category, type } = data;

      const response = await api.post("transactrions", {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      });
      setTransactions((state) => [response.data, ...state]);
    },
    [],
  );

  useEffect(() => {
    fetchTransaction();
  }, []);
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransaction,
        createTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
