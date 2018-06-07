import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Heading1 } from 'components/_basic/Headings';
import Sidebar from 'components/Sidebar';
import Breadcrumbs from 'components/Breadcrumbs';
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
    const breadcrumbsItems = [
      {
        title: 'Courses',
        url: '/'
      },
      {
        title,
        url: `/courses/${slug}`
      }
    ];
    if (lesson) {
      breadcrumbsItems.push({
        title: lesson.fields.title,
        url: `/courses/${slug}/${lesson.fields.slug}`
      });
    }

    return (
      <React.Fragment>
        <Breadcrumbs items={breadcrumbsItems} />
        <div className="course">
          <Sidebar className="course__sidebar" items={sidebarItems} title="Table of contents" />
          <div className="course__content">
            <Heading1 className="course__title">{ lesson ? lesson.fields.title : title }</Heading1>
            { lesson ?
              <Lesson lesson={lesson} />
            :
              <ReactMarkdown source={description} />
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Course;
