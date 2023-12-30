import Proptypes from 'prop-types';

export const TurnedOn = ({ isOn, children }) => (isOn ? children : null);

TurnedOn.propTypes = {
  isOn: Proptypes.bool,
  children: Proptypes.node,
};
