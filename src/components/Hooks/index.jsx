import Proptypes from 'prop-types';

export const Hooks = ({ children }) => {
  return <div>{children}</div>;
};

Hooks.propTypes = {
  children: Proptypes.node.isRequired,
};
