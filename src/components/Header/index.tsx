import { HeaderContainer, HeaderContent, NewTransactionsButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoimg from '../../assets/logo.svg'
import { NewTransactionsModal } from "../NewTransactionsModal";

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoimg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nova Transação</NewTransactionsButton>
          </Dialog.Trigger>
          
          <NewTransactionsModal/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}