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

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseInt(req.params.total);
    const tipPercentage = parseInt(req.params.tipPercentage);
    res.send(`${tipPercentage/100*total}`);
})
app.get('/magic/:question', (req, res) => {
    const question = req.params.question;
    const magicArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
    const indexMagicArray = Math.floor(Math.random()* magicArray.length)
    
    res.send(`
    <h2>${question}</h2>
    <h1>${magicArray[indexMagicArray]}</h1>
    `);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})