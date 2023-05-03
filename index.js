const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

const chefs = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is running')
});

app.get('/chef', (req, res) => {
    res.send(chefs);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(c => c.id == id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`Chef is running on port ${port}`)
})