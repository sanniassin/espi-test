import React from 'react';
import classnames from 'classnames';


export const Heading1 = (props) => <h1 {...props} className={classnames('heading', 'heading--1', props.className)}>{ props.children }</h1>;
export const Heading2 = (props) => <h2 {...props} className={classnames('heading', 'heading--2', props.className)}>{ props.children }</h2>;
export const Heading3 = (props) => <h3 {...props} className={classnames('heading', 'heading--3', props.className)}>{ props.children }</h3>;
export const Heading4 = (props) => <h4 {...props} className={classnames('heading', 'heading--4', props.className)}>{ props.children }</h4>;
export const Heading5 = (props) => <h5 {...props} className={classnames('heading', 'heading--5', props.className)}>{ props.children }</h5>;
export const Heading6 = (props) => <h6 {...props} className={classnames('heading', 'heading--6', props.className)}>{ props.children }</h6>;
