const express = require('express');
const app = express();

const hbs = require('hbs');
const port  = process.env.PORT || 3000;

app.set('view engine', 'hbs');

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        title: 'home',
        name: 'mandeep',
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', { projectTitle: 'project'})
});

app.get('/about', (req, res) => {
    res.render('about.hbs', { title: 'This Is Title', about: 'This is about the company'});
} );

app.listen(port);