const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send({
        name: 'mandeep',
        likes: [
            'programming',
            'cities'
        ]
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', { title: 'This Is Title', about: 'This is about the company'});
} );

app.listen(3000);