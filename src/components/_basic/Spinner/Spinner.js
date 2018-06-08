import React from 'react';
import classnames from 'classnames';


class Spinner extends React.PureComponent {
  render() {
    var { className, invertedColor } = this.props;
    var classes = classnames(
      'spinner-container',
      className
    );
    var spinnerClasses = classnames({
      'spinner': true,
      'spinner--inverted-color': invertedColor
    });

    return (
      <span className={classes}>
        <svg className={spinnerClasses} height="22px" width="22px" version="1.1" viewBox="0 0 22 22">
          <defs>
            <linearGradient id="spinnerGradient-1" x1="0%" x2="100%" y1="50%" y2="50%">
              <stop offset="0%" stopColor="#1071FF" />
              <stop offset="100%" stopColor="#1071FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="spinnerGradient-2" x1="50%" x2="50%" y1="49.9%" y2="50%">
              <stop offset="0%" stopColor="#1071FF" />
              <stop offset="100%" stopColor="#1071FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g strokeWidth="3" transform="translate(2.000000, 2.000000)">
              <circle cx="9" cy="9" r="9" stroke="url(#spinnerGradient-1)" />
              <circle cx="9" cy="9" r="9" stroke="url(#spinnerGradient-2)" />
            </g>
          </g>
        </svg>
      </span>
    );
  }
}

export default Spinner;
