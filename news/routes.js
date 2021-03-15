const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  const newsFileName = path.join('db', 'news.json');
  const news = JSON.parse(fs.readFileSync(newsFileName, 'utf-8'));

  res.json(news);
});

router.post('/', (req, res) => {
  const newsFileName = path.join('db', 'news.json');
  const news = JSON.parse(fs.readFileSync(newsFileName, 'utf-8'));

  news.push(req.body);

  fs.writeFileSync(newsFileName, JSON.stringify(news));

  res.status(201).end();
});

router.delete('/:id', (req, res) => {
  const newsFileName = path.join('db', 'news.json');
  const id = req.params.id;
  let news = JSON.parse(fs.readFileSync(newsFileName, 'utf-8'));

  if (!news.find(n => n.id === id)) {
    res.status(404).end();
  } else {
    news = news.filter(n => n.id !== id);
    fs.writeFileSync(newsFileName, JSON.stringify(news));
    res.status(200).end();
  }
})

module.exports = router;
