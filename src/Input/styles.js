import styled, { css } from 'styled-components'
import colors from '../Colors/colorset'

export const Input = styled.input`
  width: ${ p => p.width ? p.width : 'auto' };;
  padding: 8px;
  border-radius: 3px;
  border: ${ p => p.border ? p.border : 'none' };
  outline: none;
  color: #666;
}
`
