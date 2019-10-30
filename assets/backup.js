require('dotenv').config();
let express = require('express'),
    app = express(),
    path = require('path'),
    hogan = require('hogan-express');

app.engine('html', hogan);
app.set('view engine', 'html');

app.use(express.static(path.join('assets')));
app.get('/', (req, res) => {
    res.render('index');
})
app.get('/index', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
})

