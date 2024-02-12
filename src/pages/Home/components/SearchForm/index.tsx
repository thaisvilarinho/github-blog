import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormInput } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  onSearch: (query?: string) => Promise<void>
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchContent(data: SearchFormInputs) {
    await onSearch(data.query)
  }

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
