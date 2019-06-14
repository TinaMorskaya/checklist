const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
global.Headers = fetch.Headers;
const config = require('./config.json');


app.get('/', (req,res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../../public')})
})
app.get('/dist/FirstChecklist.js', (req,res) => {
    res.sendFile('FirstChecklist.js', { root: path.join(__dirname, '../../dist')})
})

app.listen(process.env.PORT || 8080, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`Listening on port ${process.env.PORT || 8080}!`);
})

app.get('/getImageFromUnsplash', async (req,res) => {
    let data = await getImage();
    res.set('Content-Type', 'application/json')
    res.send(data)
})

async function getImage () {
    const headers = new Headers();
    headers.append("Authorization", config.myClientId);
    let url = 'https://api.unsplash.com/photos/random?';
    url += `collections=${config.collection}`;
    const wall = await (await fetch(url, { headers })).json();
    return wall
}

