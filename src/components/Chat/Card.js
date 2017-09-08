import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const defaultProps = {
  title: '',
  text: '',
};

/**
 * The Chat message
 * @type {React.Component}
 */
class Card extends Component {
  /**
   * Render some text in the chat window
   * @return {Array} Array of options
   */
  renderOptions() {
    return this.props.options.map(option =>
      (<a href={option.link}>
        {option.icon ? <i className={`fa fa-${option.icon}`} /> : ''}
        {option.text}
        {option.isExternal ? <i className="fa fa-external-link" /> : ''}
      </a>),
    );
  }

  /**
   * Render this component
   * @return {React.Element}
   */
  render() {
    return (
      <div className="Chat__Window__Card">
        <div className="card-image">
          <img
            src={this.props.image}
            alt={this.props.alt}
            className={this.props.title && 'with-title'}
          />
          <span className="card-title">
            {this.props.title}
          </span>
        </div>
        <div className="card-action">
          <div className="header">
            {this.props.header}
          </div>
          <div className="text">
            {this.props.text}
          </div>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
