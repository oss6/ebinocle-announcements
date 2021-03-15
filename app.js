const express = require('express');
const newsRoutes = require('./news/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/news', newsRoutes);

app.listen(port, () => {
  console.log(`ebinocle-announcements listening at on port ${port}`);
});
