import React from 'react';
import classnames from 'classnames';


const Article = (props) => {
  const { className, children, ...restProps } = props;
  const classes = classnames(
    'article',
    className
  );

  return (
    <article className={classes} {...restProps}>{ children }</article>
  );
};

export default Article;
