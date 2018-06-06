import React from 'react';
import { connect } from 'react-redux';

import Sidebar from 'components/Sidebar';


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

    return (
      <div className="content-list">
        <Sidebar className="content-list__sidebar" items={sidebarItems} title="Courses" />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ContentList);
