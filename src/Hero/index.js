import React from 'react'
// import Header from '../Header';
import Header from '../Header';
import * as ts from '../Typography/styles.js';
import { string, array } from 'prop-types';

import * as s from './styles.js'

const Hero = (props) => {
  let { title, pattern, desc, paragraph,logo } = props;
  return (
    <s.Hero>
      <Header
          logo={logo}
          url="/index"
          ico="bars"
          />
      <img width="100%" src= {pattern}  />
      <ts.Header1>{title}</ts.Header1>
      <s.Subheader><ts.P>{desc}</ts.P></s.Subheader>
      <ts.P>{paragraph}</ts.P>
      {props.children}
    </s.Hero>
  )
}

Hero.propTypes = {
  logo: string.isRequired,
  title: string.isRequired,
  pattern: string.isRequired,
  desc: string.isRequired,
  paragraph: string.isRequired,
  children: array
};
export default Hero
