import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import _ from 'lodash';

import Text from 'components/_basic/Text';
import TextButton from 'components/_basic/TextButton';


const Sidebar = (props) => {
  const { title, items, location, className } = props;
  const classes = classnames(
    'sidebar',
    className
  );

  return (
    <nav className={classes}>
      { !!title && <Text big className="sidebar__title">{ title }</Text> }
      { !_.isEmpty(items) &&
        <ul className="sidebar__items">
          { items.map((item) => {
            const isActive = _.trimEnd(location.pathname, '/') === _.trimEnd(item.url, '/');
            const itemClasses = classnames({
              'sidebar__item': true,
              'sidebar__item--active': isActive
            });

            return (
              <li className={itemClasses} key={item.url}>
                { isActive ?
                  item.title
                :
                  <TextButton href={isActive ? null : item.url}>{ item.title }</TextButton>
                }
              </li>
            );
          })}
        </ul>
      }
    </nav>
  );
};

export default withRouter(Sidebar);
