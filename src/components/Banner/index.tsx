import { ComponentProps } from 'react'
import {
  BannerHeaderContainer,
  BannerContainer,
  BannerContent,
  BannerFooterContainer,
} from './styles'

type ContainerBanner = ComponentProps<'div'>

function Header({ children, ...rest }: ContainerBanner) {
  return <BannerHeaderContainer {...rest}>{children}</BannerHeaderContainer>
}

function Banner({ children, ...rest }: ContainerBanner) {
  return (
    <BannerContainer>
      <BannerContent {...rest}>{children}</BannerContent>
    </BannerContainer>
  )
}

function Footer({ children, ...rest }: ContainerBanner) {
  return <BannerFooterContainer {...rest}>{children}</BannerFooterContainer>
}

Banner.Header = Header
Banner.Footer = Footer

export default Banner
