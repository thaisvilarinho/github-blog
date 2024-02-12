import styled from 'styled-components'

export const HomeContainer = styled.main`
  grid-area: content;
  z-index: 50;
  margin: 0 auto;

  > header {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 7.2rem;
    margin-bottom: 4.8rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        color: ${(props) => props.theme['base-text']};
        font-size: 1.8rem;
        line-height: 1.6;
        font-weight: 700;
      }

      span {
        color: ${(props) => props.theme['base-span']};
        font-size: 1.4rem;
        line-height: 1.6;
        font-weight: 400;
      }
    }
  }
`

export const IssuePosts = styled.div`
  width: 86.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  row-gap: 3.2rem;
  column-gap: 3.2rem;
`
