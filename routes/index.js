var express = require('express');
var router = express.Router();

let apikey = process.env.OWN_APIKEY


router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`)
 .then(response => response.json())
 .then(data => {
   console.log(data);
   res.json({movies:data.results});
    })
 });


module.exports = router;
