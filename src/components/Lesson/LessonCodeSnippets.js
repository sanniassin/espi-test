import React from 'react';
import classnames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco as doccoSource } from 'react-syntax-highlighter/styles/hljs';
import _ from 'lodash';

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
    const languageConfig = languagesConfig[acitveLanguage];

    return (
      <div className="lesson__code">
        <div className="lesson__code-languages">
          { _.map(languages, (code, language) => {
            const isActive = language === acitveLanguage;
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
          { languages[acitveLanguage] }
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default LessonCodeSnippets;
