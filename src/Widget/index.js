import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { string } from 'prop-types'

import * as s from './styles.js'

const Widget = (props) => {
  return (
    <s.Widget>
      {
        props.username ?
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: props.username
          }}
          options={{
            username: props.username,
            height: '100%',
            theme: 'dark'
          }}/> :
          'Error! Username is not defined'
      }
    </s.Widget>
  )
}

Widget.propTypes = {
  username: string
};

export default Widget
