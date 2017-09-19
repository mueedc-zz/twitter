const express = require('express'),
    morgan = require('morgan'),
    chalk = require('chalk'),
    nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');

app.use('/', routes);

app.use(morgan('combined'));

app.use(express.static("public"));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true,
});



app.listen(3000, () => {console.log('YO IM HERE')});


// TEST CODE

// const people = [{name: 'Full'}, {name: 'Stack'}, {name: 'Son'}];
// app.get('/', (request, response) => {
//     response.render('index', {title: 'Hall of Fame', people: people});
// });


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

