import React from 'react';
import Proptypes from 'prop-types';

const s = {
  style: {
    fontSize: '60px',
  },
};

export const P = ({ children }) => <p {...s}>{children}</p>;

P.propTypes = {
  children: Proptypes.node.isRequired,
};
