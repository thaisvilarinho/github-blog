import { BriefIssueCardContainer } from './styles'

interface BriefIssueCardProps {
  title: string
  postedAt: string
  briefMessage: string
}

export function BriefIssueCard({
  title,
  postedAt,
  briefMessage,
}: BriefIssueCardProps) {
  return (
    <BriefIssueCardContainer>
      <header>
        <strong>{title}</strong>
        <span>{postedAt}</span>
      </header>

      <p>{briefMessage}</p>
    </BriefIssueCardContainer>
  )
}
