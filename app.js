const express = require('express'),
    morgan = require('morgan'),
    chalk = require('chalk'),
    lodash = require('lodash'),
    nunjucks = require('nunjucks');
const app = express();
app.use(morgan('combined'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true,
});

const people = [{name: 'Full'}, {name: 'Stack'}, {name: 'Son'}];
app.get('/', (request, response) => {
    response.render('index', {title: 'Hall of Fame', people: people});
});

app.listen(3000, () => {console.log('YO IM HERE')});
// let locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     if (err) throw err;
//     console.log(output);
// });

