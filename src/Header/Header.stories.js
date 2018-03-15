import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '.'
import logo from '../../assets/dsconf-logo-small.png';

storiesOf('Header', module)
  .add('index', () => (
    <Header 
      logo={logo}
      url="/index"
      ico="bars"
      />
  ))
