import React from 'react';


export default (props) => (
  <figure className="lesson__image">
    <img src={props.image.fields.file.url} alt={props.image.fields.title} />
    { props.caption != null && <figcaption className="lesson__image-caption">{ props.caption }</figcaption> }
  </figure>
);
