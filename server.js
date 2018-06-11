const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const publicPath = path.resolve(__dirname, 'www');
const storybookPath = path.resolve(__dirname, 'storybook-static');

app.use(express.static(publicPath));
app.use('/static', express.static(storybookPath));
app.use((req, res) => {
  res.status(200).sendFile('index.html', { root: publicPath });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
