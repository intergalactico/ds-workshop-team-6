/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../assets/dsconf-logo-small.png';
import pattern from '../assets/block.png';

import { Icon, Section, SectionHeader, SectionText, Hero, Button } from '../lib/my-awesome-library'

const st = Section.SectionTypography

const Home = (props) => {
  return (
    <div>
      <div>
        <Hero 
        title="A ds conf"
        logo={logo}
        url="/index"
        ico="bars"
        pattern={pattern}
        desc="march 14 and 15"
        paragraph="Conference tickets are now sold out"
        {...props}
        >
        <Button primary>Workshop ticket</Button>
        </Hero>
      </div>
    </div>
  )
}

export default Home
