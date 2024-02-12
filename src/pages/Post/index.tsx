import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContent } from './styles'
import { api } from '../../lib/axios'

interface PostInfoBySlug {
  title: string
  createdAtFormatted: string
  body: string
  totalOfcommentsFormatted: string
  userLogin: string
}

export function Post() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState({} as PostInfoBySlug)

  const fetchPostById = useCallback(async () => {
    try {
      const response = await api.get(
        `https://api.github.com/repos/thaisvilarinho/github-blog/issues/${id}`,
      )

      if (response.status === 200) {
        const {
          user,
          comments,
          created_at: createdAt,
          ...postData
        } = response.data
        const totalOfcommentsFormatted =
          comments > 0 && comments < 2
            ? comments + ' comentário'
            : comments + ' comentários'
        const createdAtFormatted =
          'Há ' +
          formatDistanceToNowStrict(new Date(createdAt), {
            locale: ptBR,
          })
        setPost({
          ...postData,
          userLogin: user.login,
          createdAtFormatted,
          totalOfcommentsFormatted,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchPostById()
  }, [fetchPostById])

  return (
    <PostContainer>
      {!loading && (
        <>
          <PostInfo {...post} />

          <PostContent>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.body}
            </ReactMarkdown>
          </PostContent>
        </>
      )}
    </PostContainer>
  )
}
