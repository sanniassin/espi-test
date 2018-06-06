import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';
import _ from 'lodash';

import { loadContent } from 'ducks/content';

import Lesson from 'components/Lesson';
import Course from 'components/Course';

import ContentList from 'pages/ContentList';

import './style/style.scss';


const mapStateToProps = (state) => {
  return {
    entries: state.content.entries,
    courses: state.content.courses,
    lessons: state.content.lessons
  };
};

class App extends React.PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadContent());
  }

  render() {
    const { entries, courses, lessons } = this.props;

    if (!entries) {
      return 'Loading';
    }

    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={ContentList} />
          <Route path="/courses/:id/:lessonId?" render={(props) => {
            const { id, lessonId } = props.match.params;
            const course = courses.find((item) => item.fields.slug === id);
            if (!course) {
              return <Redirect to="/" />;
            }
            return <Course course={course} lessonId={lessonId} />;
          }} />
          <Route path="/lesson/:id" render={(props) => {
            const { id } = props.match.params;
            const lesson = lessons.find((item) => item.sys.id === id);
            if (!lesson) {
              return <Redirect to="/" />;
            }
            return <Lesson lesson={lesson} />;
          }} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
