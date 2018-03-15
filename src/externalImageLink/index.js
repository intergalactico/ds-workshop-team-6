import React from 'react';
import { string } from 'prop-types';

import * as s from './styles.js'

const ExternalImageLink = (props) => {
  const {imageLink, linkURL} = props;
  return (
    <s.externalImageLink>
        <a href={linkURL}><img src={imageLink} width="200" heigth="20" /></a>
    </s.externalImageLink>
  )
}
ExternalImageLink.propTypes = {
  imageLink: string.isRequired,
  linkURL: string.isRequired
};
export default ExternalImageLink
