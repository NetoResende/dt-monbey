import * as Dialog from "@radix-ui/react-dialog";
import {
  DailogCloseButton,
  DaylogContent,
  DaylogOverlay,
  TransactionsType,
  TransactionsTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const newTransactonFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});


type NewTransactionFormInput = z.infer<typeof newTransactonFormSchema>;

export function NewTransactionsModal() {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInput>({
    resolver: zodResolver(newTransactonFormSchema),
    defaultValues: {
      type: 'income'
    }
  });
  
  const createTransactions = useContextSelector(TransactionsContext, (context)=>{
    return context.createTransactions
  })

  async function handlerSearchForm(data: NewTransactionFormInput) {
    const { description, price, category, type } = data;
     
        await createTransactions({
          description,
          price,
          category,
          type
        })
      reset();
  }

  return (
    <Dialog.Portal>
      <DaylogOverlay />

      <DaylogContent>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <DailogCloseButton>
          <X size={24} />
        </DailogCloseButton>
        <form onSubmit={handleSubmit(handlerSearchForm)}>
          <input
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />

          <Controller
            control={control}
            name="type"
            render={({field}) => {
              console.log(field);
              
              return (
                <TransactionsType onValueChange={field.onChange} value={field.value}>
                  <TransactionsTypeButton variant="income" value="income">
                    <ArrowCircleDown size={24} />
                    Entrada
                  </TransactionsTypeButton>
                  <TransactionsTypeButton variant="outcome" value="outcome">
                    <ArrowCircleUp size={24} />
                    Saída
                  </TransactionsTypeButton>
                </TransactionsType>
              );
            }}
          />
            <Dialog.Close asChild>
                  <button type="submit" disabled={isSubmitting} >
                    Cadastrar
                  </button>
            </Dialog.Close>
        </form>
      </DaylogContent>
    </Dialog.Portal>
  );
}
