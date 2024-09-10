import * as Dialog from '@radix-ui/react-dialog';
import { DailogCloseButton, DaylogContent, DaylogOverlay, TransactionsType, TransactionsTypeButton} from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionsModal() {
  return (
    <Dialog.Portal>
      <DaylogOverlay />

      <DaylogContent>
        <Dialog.Title>Nova Transação</Dialog.Title>
          <DailogCloseButton>
            <X size={24}/>
          </DailogCloseButton>
          <form >
            <input type="text" placeholder='Descrição' required/>
            <input type="number" placeholder='Preço' required/>
            <input type="text" placeholder='Categoria' required/>

            <TransactionsType>
              <TransactionsTypeButton variant='income' value='income'>
                <ArrowCircleDown size={24}/>
                Entrada
              </TransactionsTypeButton>
              <TransactionsTypeButton variant='outcome' value='outcome'>
                <ArrowCircleUp size={24}/>
                Saída
              </TransactionsTypeButton>
            </TransactionsType>

            <button type='submit'>
              Cadastrar
            </button>
          </form>
      </DaylogContent>
    </Dialog.Portal>
  );
}
