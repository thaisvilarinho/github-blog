import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'

import Banner from '../../../../components/Banner'
import { PostInfoBannerLinksWrapper, PostInfoMain } from './styles'

interface PostInfoProps {
  title: string
  createdAtFormatted: string
  totalOfcommentsFormatted: string
  userLogin: string
}
export function PostInfo({
  title,
  userLogin,
  createdAtFormatted,
  totalOfcommentsFormatted,
}: PostInfoProps) {
  const navigate = useNavigate()

  function handleGoBackNavagation() {
    navigate(-1)
  }

  return (
    <Banner>
      <PostInfoMain>
        <PostInfoBannerLinksWrapper>
          <button onClick={handleGoBackNavagation}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>voltar</span>
          </button>
          <a href="http://">
            <span>github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostInfoBannerLinksWrapper>
        <section>
          <Banner.Header>
            <strong>{title}</strong>
          </Banner.Header>

          <Banner.Footer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{userLogin}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{createdAtFormatted}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <span>{totalOfcommentsFormatted}</span>
            </div>
          </Banner.Footer>
        </section>
      </PostInfoMain>
    </Banner>
  )
}
