const express = require('express');
const app = express();
const myName = ['Anton'];


app.get('/', (req, res) => {
    res.send('Hi, tis is the main page');
})


app.get('/greeting/:name', (req, res) => {
  if (myName[req.params.name]) {
     res.send(myName[req.params.name]); 
  }else {
    res.send(
      'What\'s up,' + req.params.name + 'It\'s so great to see you!'
      )
  } 
   
});



app.listen(3000, () => {
    console.log('listening on port 3000');

})