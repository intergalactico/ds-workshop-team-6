/* Helpful imports */
import React from 'react';
import { storiesOf } from '@storybook/react';
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info';

/* The components to use in the stories */
import Box from 'Box';
import Icon from 'Icon';

/* The component to document */
import Button from '.';

/* Colors */
import Colors from '../Colors/colorset.js';

storiesOf('Button', module) // eslint-disable-line no-undef
  .add('colors',
    withInfo()(() => {
      return (
        <div>
          <Box>
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
          </Box>

        </div>
      );
  }))
 ;
