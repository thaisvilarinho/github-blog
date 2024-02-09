import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 86.4rem;
  margin: 0 auto;
  padding: 3.2rem 3.2rem 3.2rem 4rem;

  display: grid;
  margin-top: -5rem;

  border-radius: 1rem;
  background: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`

export const BannerContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;

  a,
  button {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    color: ${(props) => props.theme.blue};
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.6;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: all 0.3s ease;
    }
  }
`

export const BannerHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  strong {
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.3;
  }
`

export const BannerFooterContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  > div {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    span {
      font-size: 1.6rem;
      line-height: 1.6;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }

    svg {
      font-size: 1.8rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
