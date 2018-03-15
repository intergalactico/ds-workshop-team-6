/*
 * All the button components are using the same styled-component. There is only
 * one file with styles (this one) which is imported into all the button components.
 */

import styled, { css } from 'styled-components';
import { isCircular } from 'styled-utils';

/* Colors */
import colors from '../Colors/colorset.js';

/*
 * In styled-components, you can define functions that output
 * CSS properties. This functions can be called from inside the
 * element declarations.
 */
const isIcon = ({ isIcon }) => {
  if (!isIcon) return;
  return css`
    padding: 0px 0.5em;
    & .icon {
      margin: 0;
    }
  `;
};

/* Default styles for all the buttons */
export const Button = styled.div`
  font-family: "Futura", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  /* height: 2.40em; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.0rem;
  width: calc(100% - 32px);
  marign: 0 auto;
  cursor: pointer;
  outline: none;
  border: 2px solid;
  border-color: ${p => p.primary ? colors.conferenceblue : colors.white};
  border-radius: 3px;
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;
  text-transform: uppercase;
  background-color: ${colors.transparent};
  color: ${p => p.primary ? colors.conferenceblue : colors.white};
  font-size: ${p => p.size ? p.size : '0.938rem'};
  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }

  & .icon {
    margin: 0 5px 0 0;
    font-size: ${p => p.size ? p.size : '1rem'};
  }
  ${isIcon}
  ${isCircular}
`;

/* Styled for a label element inside a button */
export const Label = styled.span`
  margin: 0;
  margin-left: 0.5em;
  padding: 0 1em 0 0.5em;
  display: inline-flex;
  border-radius: 0 3px 3px 0;
  height: ${ () => ('2.40em'.split('em')[0] - 0.1 + 'em')};
  line-height: 2.40em;
  font-size: ${p => p.size ? p.size : '1rem'};
`;
