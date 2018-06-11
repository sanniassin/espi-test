import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/ducks';

import Article from '../src/components/Article';
import LessonCodeSnippets from '../src/components/Lesson/LessonCodeSnippets';


const code = {
  curl: "export CDA_TOKEN='<access_token>';\nexport SPACE_ID='<space_id>';",
  dotNet: "var httpClient = new HttpClient();\nvar client = new ContentfulClient(httpClient, \"<access_token>\", \"\", \"<space_id>\");",
  javascript: "const contentful = require('contentful')\nconst client = contentful.createClient({\n  space: '<space_id>',\n  accessToken: '<access_token>'\n})\n",
  java: "final CDAClient client =\n    CDAClient\n        .builder()\n        .setToken(\"<access_token>\")\n        .setSpace(\"<space_id>\")\n        .build();\n",
  javaAndroid: "final CDAClient client =\n    CDAClient\n        .builder()\n        .setToken(\"<access_token>\")\n        .setSpace(\"<space_id>\")\n        .build();\n",
  php: "$client = new \\Contentful\\Delivery\\Client(\n    '<access_token>',\n    '<space_id>'\n);",
  python: "import contentful\n\nclient = contentful.Client('<space_id>', '<access_token>')\n",
  ruby: "require ‘contentful’\n\nclient = Contentful::Client.new(\n  space: '<space_id>',\n  access_token: '<access_token>',\n  dynamic_entries: :auto,\n  raise_errors: true\n)",
  swift: "import Contentful\n\nlet client = Client(spaceId: \"<space_id>\", \n                    accessToken: \"<access_token>\")"
};

export default () => (
  <Provider store={store}>
    <Article>
      <LessonCodeSnippets {...code} />
    </Article>
  </Provider>
);
