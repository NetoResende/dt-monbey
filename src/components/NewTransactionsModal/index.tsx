import * as Dialog from '@radix-ui/react-dialog';
import { DailogCloseButton, DaylogContent, DaylogOverlay} from './styles';
import { X } from 'phosphor-react';

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

            <button type='submit'>
              Cadastrar
            </button>
          </form>
      </DaylogContent>
    </Dialog.Portal>
  );
}
