import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco as doccoSource } from 'react-syntax-highlighter/styles/hljs';
import _ from 'lodash';

import { setCodeLanguage } from 'ducks/ui';

import Text from 'components/_basic/Text';
import TextButton from 'components/_basic/TextButton';


const docco = {
  ...doccoSource
};
docco.hljs = {
  ...docco.hljs,
  background: '#F8F8F8',
  padding: '8px'
};

const languagesConfig = {
  curl: {
    label: 'cURL',
    highlighterLanguage: 'shell'
  },
  dotNet: {
    label: 'C#',
    highlighterLanguage: 'csharp'
  },
  javascript: {
    label: 'JavaScript',
    highlighterLanguage: 'javascript'
  },
  java: {
    label: 'Java',
    highlighterLanguage: 'java'
  },
  javaAndroid: {
    label: 'Android',
    highlighterLanguage: 'java'
  },
  php: {
    label: 'PHP',
    highlighterLanguage: 'php'
  },
  python: {
    label: 'Python',
    highlighterLanguage: 'python'
  },
  ruby: {
    label: 'Ruby',
    highlighterLanguage: 'ruby'
  },
  swift: {
    label: 'Swift',
    highlighterLanguage: 'swift'
  }
};

const mapStateToProps = (state) => {
  return {
    codeLanguage: state.ui.codeLanguage
  };
};

class LessonCodeSnippets extends React.Component {
  onLanguageChange = (language) => {
    const { dispatch } = this.props;

    dispatch(setCodeLanguage(language));
  }

  render() {
    const { title, codeLanguage, dispatch, ...languages } = this.props;
    const languageConfig = languagesConfig[codeLanguage];

    return (
      <div className="lesson__code">
        <div className="lesson__code-languages">
          { _.map(languages, (code, language) => {
            const isActive = language === codeLanguage;
            const classes = classnames({
              'lesson__code-language': true,
              'lesson__code-language--active': isActive
            });
            const ButtonComponent = isActive ? 'span' : TextButton;

            return (
              <Text
                className={classes}
                key={language}
              >
                <ButtonComponent onClick={isActive ? null : () => this.onLanguageChange(language)}>
                  { languagesConfig[language].label }
                </ButtonComponent>
              </Text>
            );
          })}
        </div>
        <SyntaxHighlighter language={languageConfig.highlighterLanguage} style={docco}>
          { languages[codeLanguage] }
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LessonCodeSnippets);
