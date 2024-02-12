import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

import { BriefIssueCardContainer } from './styles'
import { parseTextFromMarkDown } from '../../../../utils/parseTextFromMarkDown'
import { slugify } from '../../../../utils/slugify'

export interface BriefIssuePost {
  number: number
  title: string
  created_at: string
  body: string
}

export function BriefIssueCard({
  number,
  title,
  created_at: createdAt,
  body,
}: BriefIssuePost) {
  const navigate = useNavigate()
  const createdAtFormatted =
    'Há ' +
    formatDistanceToNowStrict(new Date(createdAt), {
      locale: ptBR,
    })
  const description = parseTextFromMarkDown(body)

  function handleNavigateToPostBySlug() {
    const slug = slugify(title)
    navigate(`/post/${number}/${slug}`)
  }

  return (
    <BriefIssueCardContainer onClick={handleNavigateToPostBySlug}>
      <header>
        <strong>{title}</strong>
        <span>{createdAtFormatted}</span>
      </header>

      <p>{description}</p>
    </BriefIssueCardContainer>
  )
}
