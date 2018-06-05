import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';

import { loadEntries } from 'ducks/content';

import Lesson from 'components/Lesson';

import './style/style.scss';


const mapStateToProps = (state) => {
  return {
    entries: state.content.entries
  };
};

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadEntries());
  }

  render() {
    const { entries } = this.props;
    const { items } = entries;
    const lessons = items
      ? items.filter((item) => item.sys.contentType.sys.id === 'lesson')
      : null;

    if (!lessons) {
      return 'Loading';
    }

    return (
      <div className="main">
        <Switch>
          <Route exact path="/" render={() => (
            lessons.map((lesson) => (
              <div key={lesson.sys.id}>
                <Link to={`/lesson/${lesson.sys.id}`}>{ lesson.fields.title }</Link>
              </div>
            ))
          )} />
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
