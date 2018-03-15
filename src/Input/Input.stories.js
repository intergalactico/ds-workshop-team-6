import React from 'react'
import { storiesOf } from '@storybook/react'

import Input from '.'

storiesOf('Input', module)
  .add('index', () => (
    <div>
     <Input placeholder='Name' />
     <Input placeholder='Email' />
    </div>
  ))
  .add('with border', () => (
    <div>
     <Input border={`1px solid #ccc`} width='100%' placeholder='100% width'/>
     <Input border={`1px solid #ccc`} placeholder='no width property'/>
    </div>
  ))
