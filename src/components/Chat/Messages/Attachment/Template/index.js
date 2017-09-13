import React from 'react';
import PropTypes from 'prop-types';
import Generic from './Generic';

const propTypes = {
  template_type: PropTypes.string.isRequired,
  elements: PropTypes.array,
};

const defaultProps = {
  elements: [],
};

/**
 * Render this component
 * @param {Array} props The properties pass in to this Element
 * @return {React.Element}
 */
const Template = (props) => {
  if (props.template_type === 'generic') {
    return <Generic {...props.elements} />;
  }

  return null;
};

Template.propTypes = propTypes;
Template.defaultProps = defaultProps;

export default Template;
