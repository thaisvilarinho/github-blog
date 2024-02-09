import leftSideEffect from '../../assets/left-side-effect.svg'
import logoGithubBlog from '../../assets/logo.svg'
import rightSideEffect from '../../assets/right-side-effect.svg'

import {
  BottomBlurEffect,
  HeaderContainer,
  LogoWrapper,
  Logo,
  RightBlurEffect,
  LeftBlurEffect,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LeftBlurEffect />
      <img src={leftSideEffect} alt="" />
      <LogoWrapper>
        <Logo src={logoGithubBlog} alt="Github blog logo" />
        <BottomBlurEffect />
      </LogoWrapper>
      <img src={rightSideEffect} alt="" />
      <RightBlurEffect />
    </HeaderContainer>
  )
}
