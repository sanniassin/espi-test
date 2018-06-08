import React from 'react';
import { connect } from 'react-redux';

import { Heading1 } from 'components/_basic/Headings';
import Text from 'components/_basic/Text';
import TextButton from 'components/_basic/TextButton';
import Article from 'components/Article';


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
        <Article className="courses">
          <Heading1>Courses</Heading1>
          <Text>
            { courses.map((item) => (
              <TextButton href={`/courses/${item.fields.slug}`} key={item.sys.id} className="courses__link">
                { item.fields.title }
              </TextButton>
            ))}
          </Text>
        </Article>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Courses);
