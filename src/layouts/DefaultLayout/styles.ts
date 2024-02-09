import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding-bottom: 23.4rem;
  z-index: -50;

  display: grid;
  background: ${(props) => props.theme['base-background']};

  grid-template-rows: 296px auto;
  grid-template-areas:
    'header'
    'content';
`
