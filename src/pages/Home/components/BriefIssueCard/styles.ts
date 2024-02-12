import styled from 'styled-components'

export const BriefIssueCardContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  gap: 2rem;
  border-radius: 1rem;

  padding: 3.2rem;

  background: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-post']};
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  > header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    strong {
      color: ${(props) => props.theme['base-title']};
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.6;
      width: 28.3rem;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.6;
      text-align: right;
      width: 30%;
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
