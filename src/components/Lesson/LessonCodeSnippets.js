import React from 'react';
import classnames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco as doccoSource } from 'react-syntax-highlighter/styles/hljs';
import _ from 'lodash';

const docco = {
  ...doccoSource
};
docco.hljs = {
  ...docco.hljs,
  background: '#F5F5FF'
};


class LessonCodeSnippets extends React.Component {
  state = {
    acitveLanguage: 'java'
  }

  onLanguageChange = (language) => {
    this.setState({
      acitveLanguage: language
    });
  }

  render() {
    const { title, ...languages } = this.props;
    const { acitveLanguage } = this.state;

    return (
      <div className="lesson__code">
        <div className="lesson__code-languages">
          { _.map(languages, (code, language) => {
            const isActive = language === acitveLanguage;
            const classes = classnames({
              'lesson__code-language': true,
              'lesson__code-language--active': isActive
            });
            return (
              <div
                className={classes}
                onClick={isActive ? null : this.onLanguageChange.bind(this, language)}
                key={language}
              >
                { language }
              </div>
            );
          })}
        </div>
        <SyntaxHighlighter language={acitveLanguage} style={docco}>
          { languages[acitveLanguage] }
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default LessonCodeSnippets;
