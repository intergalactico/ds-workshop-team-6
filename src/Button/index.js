/*
 * Button component. It provides interfaces for all types
 * of the buttons. Different types of the buttons are coded
 * as different components and imported here.
 */

import React from 'react';
import { string } from 'prop-types';

import ButtonLink from './ButtonLink';

/* Colors */
import Colors from '../Colors/colorset.js';

const Button = ({ href, label, children, primary, secondary, ...props }) => {
  /*
   * Different buttons to be rendered, depending on the
   * given properties
   */
   console.log(primary);
  return <ButtonLink href={href} primary={primary} {...props}>{children}</ButtonLink>;
};

Button.propTypes = {
  href: string,
  label: string
};

export default Button;
