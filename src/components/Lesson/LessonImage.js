import React from 'react';


export default (props) => (
  <figure>
    <img src={props.image.fields.file.url} alt={props.image.fields.title} />
    { props.caption != null && <figcaption>{ props.caption }</figcaption> }
  </figure>
);
