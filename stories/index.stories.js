import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/_basic/Button';
import Text from '../src/components/_basic/Text';
import TextButton from '../src/components/_basic/TextButton';
import { Heading1, Heading2 } from '../src/components/_basic/Headings';
import Spinner from '../src/components/_basic/Spinner';

import Breadcrumbs from '../src/components/Breadcrumbs';
import Sidebar from '../src/components/Sidebar';
import Article from '../src/components/Article';
import LessonCodeSnippets from './LessonCodeSnippets';

import '../src/style/style.scss';

const breadcrumbsItems = [
  {
    title: 'Storybook',
    url: '/'
  },
  {
    title: 'Breadcrumbs',
    url: '/?selectedKind=Breadcrumbs'
  },
  {
    title: 'Demo'
  }
];

const sidebarItems = [
  {
    title: 'Course overview',
    url: '/1'
  },
  {
    title: 'SDK basics',
    url: '/2'
  },
  {
    title: 'Fetch all entries',
    url: '/3'
  }
];

storiesOf('Breadcrumbs', module).add('Demo', () => (
  <Router>
    <Breadcrumbs items={breadcrumbsItems} />
  </Router>
));

storiesOf('Sidebar', module).add('Demo', () => (
  <Router>
    <Sidebar items={sidebarItems} title="Table of contents" />
  </Router>
));

storiesOf('Article', module).add('Demo', () => (
  <Article>
    <h1>Hello</h1>
    <p>Article is a component which styles most widely used text elements. Such as:</p>
    <ul>
      <li>Bulleted Lists</li>
      <li>Paragraphs</li>
    </ul>
    <p>or</p>
    <ol>
      <li>Numbered Lists</li>
      <li>Headings</li>
    </ol>
    <h2>This is a second level heading</h2>
    <p>And here is the image from the nice <TextButton href="https://www.alexirpan.com/2018/02/14/rl-hard.html" target="_blank">article</TextButton> about deep reinforcement learning.</p>
    <img src="https://www.alexirpan.com/public/rl-hard/bender-70.jpg" alt="Futurama Bender meme" />
  </Article>
));

storiesOf('Code snippet', module).add('Demo', LessonCodeSnippets);

storiesOf('Button', module)
  .add('With text', () => <Button onClick={action('clicked')} style={{ width: 200 }}>Hello Button</Button>);

storiesOf('Headings', module)
  .add('H1', () => <Heading1>First level heading</Heading1>)
  .add('H2', () => <Heading2>Second level heading</Heading2>);

storiesOf('Text', module)
  .add('Small', () => <Text small>Small text<br />with line break</Text>)
  .add('Normal', () => <Text>Normal text<br />with line break</Text>)
  .add('Big', () => <Text big>Big text<br />with line break</Text>);

storiesOf('TextButton', module)
  .add('Styled with Text', () => (
    <Router>
      <Text>
        <TextButton onClick={action('clicked')} href="#">TextButton with href</TextButton>
      </Text>
    </Router>
  ));

storiesOf('Spinner', module)
  .add('Clockwise rotating', () => <Spinner />);
