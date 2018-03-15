import styled, { css } from 'styled-components'

export const Widget = styled.div`
  color: red;

  & > div {
    height: 100%;
  }
`
