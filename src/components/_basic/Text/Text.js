import React from 'react';
import classnames from 'classnames';


const Text = (props) => {
  const { children, className, small, big, ...restProps } = props;
  const classes = classnames({
    'text': true,
    'text--big': big,
    'text--small': small
  }, className);

  return (
    <p className={classes} {...restProps}>{ children }</p>
  );
};

export default Text;
