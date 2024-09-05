import { HeaderContainer, HeaderContent, NewTransactionsButton } from "./styles";
import logoimg from '../../assets/logo.svg'

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoimg} alt="" />

        <NewTransactionsButton>Nova Transação</NewTransactionsButton>
      </HeaderContent>
    </HeaderContainer>
  )
}