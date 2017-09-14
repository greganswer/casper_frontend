import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
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
    if (props.elements.length > 1) {
      return (
        <ul className="Chat__Cards">
          {props.elements.map(element =>
            (<li key={uuid.v1()}>
              <Generic {...element} />
            </li>),
          )}
        </ul>
      );
    }

    return <Generic {...props.elements[0]} />;
  }

  return null;
};

Template.propTypes = propTypes;
Template.defaultProps = defaultProps;

export default Template;
