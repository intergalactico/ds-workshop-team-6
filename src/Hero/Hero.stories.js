import React from 'react'
import { storiesOf } from '@storybook/react'

import Hero from '.'

storiesOf('Hero', module)
  .add('index', () => (
    <Hero />
  ))
