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

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')} style={{ width: 200 }}>Hello Button</Button>);

storiesOf('Headings', module)
  .add('H1', () => <Heading1>First level heading</Heading1>)
  .add('H2', () => <Heading2>Second level heading</Heading2>);

storiesOf('Text', module)
  .add('Small', () => <Text small>Small text<br />with line break</Text>)
  .add('Normal', () => <Text>Normal text<br />with line break</Text>)
  .add('Big', () => <Text big>Big text<br />with line break</Text>);

storiesOf('TextButton', module)
  .add('styled with Text', () => (
    <Router>
      <Text>
        <TextButton onClick={action('clicked')} href="#">TextButton with href</TextButton>
      </Text>
    </Router>
  ));


storiesOf('Spinner', module)
  .add('Clockswise rotating', () => <Spinner />);
