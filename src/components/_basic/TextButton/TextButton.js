import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';


const TextButton = (props) => {
  const { children, href, className, ...restProps } = props;
  const classes = classnames(
    'text-button',
    className
  );
  const isLocalHref = href && !/^[a-z]*:/.test(href);

  if (href) {
    if (isLocalHref) {
      return <Link {...restProps} to={href} className={classes}>{ children }</Link>;
    }
    return <a {...restProps} href={href} className={classes}>{ children }</a>;
  }
  return <span {...restProps} className={classes}>{ children }</span>;
};

export default TextButton;
