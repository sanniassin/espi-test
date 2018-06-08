import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';


const Button = (props) => {
  const { children, href, className, ...restProps } = props;
  const classes = classnames(
    'button',
    className
  );
  const isLocalHref = href && !/^[a-z]*:/.test(href);

  return (
    <div {...restProps} className={classes}>
      { href // eslint-disable-line no-nested-ternary
        ? isLocalHref
          ? <Link to={href} className="button__label">{ children }</Link>
          : <a href={href} className="button__label">{ children }</a>
        : <span className="button__label">{ children }</span>
      }
    </div>
  );
};

export default Button;
