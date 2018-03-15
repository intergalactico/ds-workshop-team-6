import React from 'react'
import { storiesOf } from '@storybook/react'

import Widget from '.'

storiesOf('Widget', module)
  .add('index', () => (
    <Widget username='dsconference' />
  ))
