import { useCallback, useEffect, useState } from 'react'

import { Profile } from './components/Profile'
import { BriefIssueCard, BriefIssuePost } from './components/BriefIssueCard'
import { SearchForm } from './components/SearchForm'

import { api } from '../../lib/axios'

import { HomeContainer, IssuePosts } from './styles'

export function Home() {
  const [posts, setPosts] = useState<BriefIssuePost[]>([])
  const [loading, setLoading] = useState(true)
  const numberOfPostsLabelFormatted =
    posts.length > 0
      ? posts.length === 1
        ? `${posts.length} publicação`
        : `${posts.length} publicações`
      : '0 publicações'

  const fetchPosts = useCallback(async (query?: string) => {
    try {
      let url = 'https://api.github.com/repos/thaisvilarinho/github-blog/issues'
      if (query) {
        url = `https://api.github.com/search/issues?q=${query}%20repo:thaisvilarinho/github-blog`
      }
      const response = await api.get(url)
      if (query) {
        setPosts(response.data.items)
      } else {
        setPosts(response.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <HomeContainer>
      <Profile />

      <header>
        <div>
          <h2>Publicações</h2>
          <span>{numberOfPostsLabelFormatted}</span>
        </div>
        <SearchForm onSearch={fetchPosts} />
      </header>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <IssuePosts>
          {posts.map((post) => (
            <BriefIssueCard key={post.number} {...post} />
          ))}
        </IssuePosts>
      )}
    </HomeContainer>
  )
}
