import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Banner from '../../../../components/Banner'
import { UserAvatarWrapper, UserInfo } from './styles'

import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface User {
  name: string
  login: string
  htmlUrl: string
  company: string
  followers: number
  avatarUrl: string
  bio: string
}

export function Profile() {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState(true)

  const fetchUser = useCallback(async () => {
    try {
      const response = await api.get('users/thaisvilarinho')
      const {
        name,
        followers,
        login,
        company,
        html_url: htmlUrl,
        avatar_url: avatarUrl,
        bio,
      } = response.data
      const userFetched = {
        name,
        followers,
        login,
        company,
        htmlUrl,
        avatarUrl,
        bio,
      }
      setUser(userFetched)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <Banner>
      {!loading && (
        <>
          <UserAvatarWrapper>
            <img src={user?.avatarUrl} alt="Avatar do usuário" />
          </UserAvatarWrapper>

          <UserInfo>
            <Banner.Header>
              <strong>{user?.name}</strong>
              <a href={user?.htmlUrl} target="_blank" rel="noreferrer">
                <span>github</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Banner.Header>
            <p>{user?.bio}</p>

            <Banner.Footer>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <span>{user?.login}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{user?.company}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{user?.followers} seguidores</span>
              </div>
            </Banner.Footer>
          </UserInfo>
        </>
      )}
    </Banner>
  )
}
