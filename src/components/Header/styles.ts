import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 10;
  grid-area: header;
  width: 100%;
  background-image: url('/src/assets/cover.png');
  background-size: cover;
  background-repeat: no-repeat;

  overflow-x: hidden;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const LogoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Logo = styled.img``

export const LeftBlurEffect = styled.div`
  position: absolute;
  right: 0;
  top: -9.6rem;
  left: -13rem;
  height: 23.6rem;
  width: 23.6rem;
  background: #14589c;
  border-radius: 9999px;
  -webkit-filter: blur(400px);
  -moz-filter: blur(400px);
  -o-filter: blur(400px);
  -ms-filter: blur(400px);
  filter: blur(400px);
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const BottomBlurEffect = styled.div`
  height: 5.2rem;
  width: 89.1rem;
  background: #14589c;
  z-index: 10;
  position: absolute;
  bottom: 0.9rem;
  -webkit-filter: blur(212px);
  -moz-filter: blur(212px);
  -o-filter: blur(212px);
  -ms-filter: blur(212px);
  filter: blur(212px);
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const RightBlurEffect = styled.div`
  position: absolute;
  right: 0;
  top: -5.2rem;
  height: 15.525rem;
  width: 15.525rem;
  background: #14589c;
  border-radius: 9999px;
  transform: rotate(-15deg);
  -webkit-filter: blur(368px);
  -moz-filter: blur(368px);
  -o-filter: blur(368px);
  -ms-filter: blur(368px);
  filter: blur(368px);
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
