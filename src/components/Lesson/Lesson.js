import React from 'react';

import LessonCopy from './LessonCopy';
import LessonImage from './LessonImage';
import LessonCodeSnippets from './LessonCodeSnippets';


const components = {
  lessonCopy: LessonCopy,
  lessonImage: LessonImage,
  lessonCodeSnippets: LessonCodeSnippets
};

class Lesson extends React.Component {
  render() {
    const { lesson } = this.props;
    const { modules } = lesson.fields;

    return (
      <div className="lesson">
        { modules.map((module) => {
          const ModuleComponent = components[module.sys.contentType.sys.id];
          if (!ModuleComponent) {
            return null;
          }
          return <ModuleComponent {...module.fields} key={module.sys.id} />;
        })}
      </div>
    );
  }
}

export default Lesson;
