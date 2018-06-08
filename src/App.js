import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import { loadContent } from 'ducks/content';

import Spinner from 'components/_basic/Spinner';

import Courses from 'pages/Courses';
import Course from 'pages/Course';

import './style/style.scss';


const mapStateToProps = (state) => {
  return {
    loading: !state.content.entries,
    courses: state.content.courses
  };
};

class App extends React.PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadContent());
  }

  render() {
    const { loading, courses } = this.props;

    return (
      <div className="main">
        { loading ?
          <Spinner className="main__loader" />
        :
          <Switch>
            <Route exact path="/" component={Courses} />
            <Route path="/courses/:id/:lessonId?" render={(props) => {
              const { id, lessonId } = props.match.params;
              const course = courses.find((item) => item.fields.slug === id);
              if (!course) {
                return <Redirect to="/" />;
              }
              return <Course course={course} lessonId={lessonId} />;
            }} />
            <Redirect to="/" />
          </Switch>
        }
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
