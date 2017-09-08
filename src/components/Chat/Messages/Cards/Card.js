import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  alt: PropTypes.string.isRequired,
  header: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const defaultProps = {
  text: '',
  header: '',
  title: '',
};

/**
 * The Chat message
 * @type {React.Component}
 */
class Card extends Component {
  /**
   * Renderthe header
   * @return {React.Element|null} [description]
   */
  renderHeader() {
    if (!this.props.header) {
      return null;
    }

    return (
      <div className="header">
        {this.props.header}
      </div>
    );
  }
  /**
   * Render some text in the chat window
   * @return {Array} Array of options
   */
  renderOptions() {
    return this.props.options.map(option =>
      (<a href={option.link} key={option.id}>
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
      <div className="Chat__Card">
        <div className={`image ${this.props.title && 'with-title'}`}>
          <img src={this.props.image} alt={this.props.alt} />
          <div className="title">
            {this.props.title}
          </div>
        </div>
        <div className="text">
          {this.renderHeader()}
          <p>
            {this.props.text}
          </p>
          <div className="links">
            {this.renderOptions()}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
