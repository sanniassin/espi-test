import React from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import Text from 'components/_basic/Text';
import TextButton from 'components/_basic/TextButton';


const Breadcrumbs = (props) => {
  const { items, location } = props;

  return (
    <div className="breadcrumbs">
      { items.map((item) => {
        const isActive = !item.url || _.trimEnd(location.pathname, '/') === _.trimEnd(item.url, '/');

        return (
          <Text small className="breadcrumbs__item" key={item.url}>
            { isActive ?
              item.title
            :
              <TextButton href={isActive ? null : item.url}>{ item.title }</TextButton>
            }
          </Text>
        );
      })}
    </div>
  );
};

export default withRouter(Breadcrumbs);
