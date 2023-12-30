import Proptypes from 'prop-types';

export const TurnedOff = ({ isOn, children }) => (isOn ? null : children);

TurnedOff.propTypes = {
  isOn: Proptypes.bool,
  children: Proptypes.node,
};
