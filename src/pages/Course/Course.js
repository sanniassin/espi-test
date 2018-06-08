import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';

import { Heading1 } from 'components/_basic/Headings';
import Text from 'components/_basic/Text';
import Button from 'components/_basic/Button';
import Sidebar from 'components/Sidebar';
import Breadcrumbs from 'components/Breadcrumbs';
import Article from 'components/Article';
import Lesson from 'components/Lesson';


class Course extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (prevProps.lessonId !== this.props.lessonId) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { course, lessonId } = this.props;
    const { lessons, title, description, slug, skillLevel, duration } = course.fields;
    const lessonIndex = lessons.findIndex((item) => item.fields.slug === lessonId);
    const lesson = lessons[lessonIndex];
    const isLastLesson = lesson === _.last(lessons);
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
          <Article className="course__content">
            <Heading1 className="course__title">{ lesson ? lesson.fields.title : title }</Heading1>
            { !lesson &&
              <Text className="course__overview">
                Duration: { duration } minute{ duration > 1 ? 's' : '' }
                <br />
                Skill level: { _.capitalize(skillLevel) }
              </Text>
            }
            { lesson ?
              <Lesson lesson={lesson} />
            :
              <ReactMarkdown source={description} />
            }
            { !isLastLesson &&
              <Button className="course__btn-next" href={`/courses/${slug}/${lessons[lessonIndex + 1].fields.slug}`}>
                { lesson ? 'Next lesson' : 'Start course' }
              </Button>
            }
          </Article>
        </div>
      </React.Fragment>
    );
  }
}

export default Course;
