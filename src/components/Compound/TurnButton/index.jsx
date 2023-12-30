import React from 'react';
import Proptypes from 'prop-types';

export const TurnButton = ({ isOn, onTurn, ...props }) => {
  return (
    <button onClick={onTurn} {...props}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

TurnButton.propTypes = {
  isOn: Proptypes.node,
  onTurn: Proptypes.func,
};
