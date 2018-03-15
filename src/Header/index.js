import React from 'react'
import { string } from 'prop-types';

import * as s from './styles.js'
import Icon from '../Icon';

const Header = (props) => {

  const {url, logo, ico} = props;
  return (
    <s.Header>
      <s.LogoLink href={url}><img src={logo} width="200" /></s.LogoLink>
      <s.IconLink href="#" target="_blank"><Icon name={ico}/></s.IconLink>
    </s.Header>
  )
}

Header.propTypes = {
  url: string.isRequired,
  logo: string.isRequired,
  ico: string
};

export default Header
