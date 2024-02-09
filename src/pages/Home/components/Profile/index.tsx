import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Banner from '../../../../components/Banner'
import { UserAvatarWrapper, UserInfo } from './styles'

import userAvatar from '../../../../assets/avatar.jpeg'

export function Profile() {
  return (
    <Banner>
      <UserAvatarWrapper>
        <img src={userAvatar} alt="Avatar do usuário" />
      </UserAvatarWrapper>

      <UserInfo>
        <Banner.Header>
          <strong>Thaís Vilarinho</strong>
          <a href="http://">
            <span>github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Banner.Header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <Banner.Footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>thaisvilarinho</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Bernal</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>4 seguidores</span>
          </div>
        </Banner.Footer>
      </UserInfo>
    </Banner>
  )
}
