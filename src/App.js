import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { loadEntries } from 'ducks/content';

import './style/style.scss';


const mapStateToProps = (state) => {
  return {
    entries: state.content.entries.items
  };
};

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadEntries());
  }

  render() {
    const { entries } = this.props;

    return (
      <div className="main">
        { entries ?
            entries.map(entry => (
              <div key={entry.sys.id}>
                <ReactMarkdown
                  source={
                    entry.fields.modules
                    ? entry.fields.modules[0].fields.copy
                    : entry.fields.copy
                  }
                />
              </div>
            ))
          :
           'Loading'
        }
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
