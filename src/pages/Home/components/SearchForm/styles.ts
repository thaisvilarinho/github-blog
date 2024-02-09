import styled from 'styled-components'

export const SearchFormInput = styled.input`
  padding: 1.2rem 1.6rem;
  width: 100%;
  background: ${(props) => props.theme['base-input']};
  border-radius: 0.6rem;
  border: 1px solid ${(props) => props.theme['base-border']};

  color: ${(props) => props.theme['base-text']};

  font-size: 1.6rem;
  line-height: 1.6;
  font-weight: 400;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
