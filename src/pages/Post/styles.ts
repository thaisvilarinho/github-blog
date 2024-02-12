import styled from 'styled-components'

export const PostContainer = styled.main`
  grid-area: content;
  z-index: 50;
  margin: 0 auto;
  background: ${(props) => props.theme['base-background']};
`
export const PostContent = styled.section`
  width: 86.4rem;
  display: flex;
  flex-direction: column;
  padding: 4rem 3.2rem;
  gap: 2.4rem;

  color: ${(props) => props.theme['base-text']};

  a {
    color: ${(props) => props.theme.blue};
  }

  img {
    width: 100%;
  }
`
