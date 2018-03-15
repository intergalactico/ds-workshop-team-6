import React from 'react'
import { storiesOf } from '@storybook/react';
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info';

import ExternalImageLink from '.'

storiesOf('ExternalImageLink', module)
  .add('index',
    withInfo(`
The externalImageLink component renders an image that functions as a link
  `)(() => (
    <ExternalImageLink
      imageLink="http://corporate.elisa.fi/img/logot/Elisa_logo_black.png"
      linkURL="http://www.elisa.fi/"
    />
)));
