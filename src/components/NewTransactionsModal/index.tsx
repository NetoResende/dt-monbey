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

const newTransactonFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInput = z.infer<typeof newTransactonFormSchema>;

export function NewTransactionsModal() {
  const {
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

  async function handlerSearchForm(data: NewTransactionFormInput) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
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

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </DaylogContent>
    </Dialog.Portal>
  );
}
