import React from 'react';
import { connect } from 'react-redux';

import Sidebar from 'components/Sidebar';
import Breadcrumbs from 'components/Breadcrumbs';


const mapStateToProps = (state) => {
  return {
    courses: state.content.courses
  };
};

class ContentList extends React.PureComponent {
  render() {
    const { courses } = this.props;
    const sidebarItems = courses.map((item) => ({
      title: item.fields.title,
      url: `/courses/${item.fields.slug}`
    }));
    const breadcrumbsItems = [
      {
        title: 'Courses',
        url: '/'
      }
    ];

    return (
      <React.Fragment>
        <Breadcrumbs items={breadcrumbsItems} />
        <div className="content-list">
          <Sidebar className="content-list__sidebar" items={sidebarItems} />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(ContentList);
