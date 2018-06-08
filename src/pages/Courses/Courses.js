import React from 'react';
import { connect } from 'react-redux';

import { Heading1 } from 'components/_basic/Headings';
import Text from 'components/_basic/Text';
import TextButton from 'components/_basic/TextButton';


const mapStateToProps = (state) => {
  return {
    courses: state.content.courses
  };
};

class Courses extends React.PureComponent {
  render() {
    const { courses } = this.props;

    return (
      <React.Fragment>
        <div className="courses">
          <Heading1>Courses</Heading1>
          { courses.map((item) => (
            <Text key={item.sys.id}>
              <TextButton href={`/courses/${item.fields.slug}`}>{ item.fields.title }</TextButton>
            </Text>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Courses);
