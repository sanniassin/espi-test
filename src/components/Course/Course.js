import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Heading1 } from 'components/_basic/Headings';
import Sidebar from 'components/Sidebar';
import Lesson from 'components/Lesson';


class Course extends React.PureComponent {
  render() {
    const { course, lessonId } = this.props;
    const { lessons, title, description, slug } = course.fields;
    const lesson = lessons.find((item) => item.fields.slug === lessonId);
    const sidebarItems = [
      {
        title: 'Course overview',
        url: `/courses/${slug}`
      },
      ...lessons.map((item) => ({
        title: item.fields.title,
        url: `/courses/${slug}/${item.fields.slug}`
      }))
    ];

    return (
      <div className="course">
        <Sidebar className="course__sidebar" items={sidebarItems} />
        <div className="course__content">
          <Heading1 className="course__title">{ lesson ? lesson.fields.title : title }</Heading1>
          { lesson ?
            <Lesson lesson={lesson} />
          :
            <ReactMarkdown source={description} />
          }
        </div>
      </div>
    );
  }
}

export default Course;
