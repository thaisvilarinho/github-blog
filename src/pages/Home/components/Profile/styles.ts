import styled from 'styled-components'

export const UserAvatarWrapper = styled.div`
  overflow: hidden;
  width: 14.8rem;
  height: 14.8rem;
  border-radius: 0.8rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const UserInfo = styled.div`
  flex: 1;

  > p {
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6;
    margin-top: 0.8rem;
  }
`
