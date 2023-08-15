const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.send(`<h1>99 Bottles of Beer On The Wall</h1> , 
  <a href="98"> Take One Down, Pass it around </a>`);
})

app.listen(3000, function(){
  console.log("Listening on port 3000");
})

app.get('/:numOfBottles', (req, res) => {
  const currentGlass = req.params.numOfBottles;
  // when there is a request from the server with the parameter numOfBottles, thefrom the hyperlink
  const nxtGlass = currentGlass - 1


if (currentGlass > 0) {
  res.send(`
  <h2>${currentGlass} Glasses of beer on the Wall. ${currentGlassCt} Glasses of beer.</h2>
  <a href="/${nxtGlass}">Take one down, pass it around</a>
  `);
} else {
  res.send(`
      <h2>${currentGlass} Glasses of beer on the Wall. ${currentGlass} Glasses of beer...</h2>
      <a href="/99">Want to buy more?</a>
  `)
}
});

app.listen(3000, function() {
console.log("listening");
});


// const http = request('html');
// http.createServer();