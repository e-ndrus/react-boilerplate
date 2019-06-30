/**
 *
 * SocialLink
 *
 */

import React from 'react';
import LoginButton from 'components/LoginButton';
import { capitalize } from 'lodash';
import PropTypes from 'prop-types';

function SocialLink({ provider }) {
  return (
    <a href={`http://localhost:1337/connect/${provider}`} className="link">
      <LoginButton type="button" social={provider} style={{ width: '100%' }}>
        <i className={`fa fa-${provider}`} />
        {capitalize(provider)}
      </LoginButton>
    </a>
  );
}

SocialLink.propTypes = {
  provider: PropTypes.string.isRequired,
};

export default SocialLink;
