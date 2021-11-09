const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Hi, tis is the main page');
})

app.get('/greeting/:name', (req, res) => {

    res.send(
        'What\'s up, ' + req.params.name + '! It\'s so great to see you!'
    )

});

app.get('/tip', (req, res) => {

})




app.listen(3000, () => {
    console.log('listening on port 3000');

})