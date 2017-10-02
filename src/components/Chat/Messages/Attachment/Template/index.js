import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Button from './Button';
import Generic from './Generic';
import scrollRightToLeft from '../../../../helpers/scrollRightToLeft';

const propTypes = {
  template_type: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = { elements: [] };

/**
 * Template or Template list
 * @type {React.Component}
 */
class Template extends Component {
  /**
   * Scroll to the bottom of the window on update
   * @return {void}
   */
  componentDidMount() {
    if (this.props.elements && this.props.elements.length > 1) {
      scrollRightToLeft('.Chat__Cards');
    }
  }

  /**
   * Render this component
   * @param {array} props The properties pass in to this Element
   * @return {React.Element}
   */
  render() {
    if (this.props.template_type === 'generic') {
      if (this.props.elements.length > 1) {
        return (
          <ul className="Chat__Cards">
            {this.props.elements.map(element => (
              <li key={uuid.v1()}>
                <Generic {...element} />
              </li>
            ))}
          </ul>
        );
      }

      return <Generic {...this.props.elements[0]} />;
    } else if (this.props.template_type === 'button') {
      return <Button {...this.props} />;
    }

    return null;
  }
}

Template.propTypes = propTypes;
Template.defaultProps = defaultProps;

export default Template;
