import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Banner from '../../../../components/Banner'
import { PostInfoBannerLinksWrapper, PostInfoMain } from './styles'

export function PostInfo() {
  return (
    <Banner>
      <PostInfoMain>
        <PostInfoBannerLinksWrapper>
          <button>
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
            <strong>JavaScript data types and data structures</strong>
          </Banner.Header>

          <Banner.Footer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>thaisvilarinho</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>Há 1 dia</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <span>5 comentários</span>
            </div>
          </Banner.Footer>
        </section>
      </PostInfoMain>
    </Banner>
  )
}
