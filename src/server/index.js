const express = require('express');
const path = require('path');
const app = express();

//app.use(express.static(__dirname + '../../public'))
//app.use(express.static(path.join(__dirname, 'dist'));
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
