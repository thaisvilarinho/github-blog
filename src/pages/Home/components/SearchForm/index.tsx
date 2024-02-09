import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormInput } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchContent() {}

  return (
    <form onSubmit={handleSubmit(handleSearchContent)}>
      <SearchFormInput
        placeholder="Buscar conteúdo"
        {...register('query')}
        disabled={isSubmitting}
      />
    </form>
  )
}
