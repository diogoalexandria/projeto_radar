const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://admin:Diogo0502@cluster0-w2pqv.mongodb.net/week-10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3001, () => {
    console.log('Server listening on port 3000.');
});