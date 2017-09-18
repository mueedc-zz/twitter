const express = require('express'),
    morgan = require('morgan'),
    chalk = require('chalk'),
    lodash = require('lodash');
const app = express();

app.listen(3000, () => {console.log('YO IM HERE')});
app.get('/', (request, response) => {
    response.send('Welcome');
});
app.use(morgan('combined'));

console.log("test")
