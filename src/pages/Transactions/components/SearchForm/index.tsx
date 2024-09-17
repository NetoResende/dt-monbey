import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver} from '@hookform/resolvers/zod'


const searchFormSchema = zod.object({
  query: zod.string(),
})
type SearchFormInput = zod.infer<typeof searchFormSchema>;

export function SearchForm(){
  const { register, handleSubmit, formState: {isSubmitting} } = useForm <SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handlerSearchTransactions(data: SearchFormInput){
    await new Promise(resolve => setTimeout(resolve, 2000))

   console.log(data);
  }


  return (
   <SearchFormContainer onSubmit={handleSubmit(handlerSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque por transações"
        {...register('query')}
         />

      <button disabled={isSubmitting}>
        <MagnifyingGlass/>
         Buscar
      </button>
   </SearchFormContainer>
  )
}