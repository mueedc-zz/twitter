const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const urlencoded = bodyParser.urlencoded({ extended: false });


router.post('/tweets', urlencoded, function(req, res) {
  let name = req.body.name;
  let text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});
router.get('/users/:name', function(req, res) {
  let name = req.params.name;
  let list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, name: name, showForm: true} );
});
router.get('/tweets/:id', function(req, res) {
  let id = +req.params.id;
  let tweet = tweetBank.find( {id: id} );
  res.render( 'index', { tweets: tweet });
});

module.exports = router;
