import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContent } from './styles'

export function Post() {
  const markdown = `Just a link: www.nasa.gov.`

  return (
    <PostContainer>
      <PostInfo />

      <PostContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
