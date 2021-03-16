const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const newsRoutes = require('./news/routes');

// Create db if not present
const newsFileName = path.join('db', 'news.json');
const initialNews = [
  {
    id: 'retire-biosamples-covid19',
    title: 'Retiring biosamples-covid19',
    type: 'domain_retirement',
    summary: 'We will retire biosamples-covid19 by the end of June 2021. Please migrate to sra-sample-covid19.',
    date: '2020-10-06T11:00:00'
  },
  {
    id: 'constrained-xrefs',
    title: 'Constrained cross reference searching',
    type: 'forthcoming_changes',
    summary: 'Constrained cross reference searching will let you limit the cross references returned.',
    date: '2020-11-06T11:00:00'
  },
  {
    id: 'test-of-forthcoming-changes',
    title: 'Test of forthcoming changes',
    type: 'forthcoming_changes',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu lorem, egestas quis nunc eu, pretium tincidunt purus. Duis iaculis interdum ante, non scelerisque diam gravida ac.',
    date: '2021-03-15T11:00:00'
  }
];

if (!fs.existsSync('db')) {
  fs.mkdirSync('db');
}

if (!fs.existsSync(newsFileName)) {
  fs.writeFileSync(newsFileName, JSON.stringify(initialNews));
}

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/news', newsRoutes);

app.listen(port, () => {
  console.log(`ebinocle-announcements listening at on port ${port}`);
});
