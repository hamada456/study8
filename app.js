const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

//  http://localhost:3000/numA/2/numB/3

app.get("/numA/:2/numB/:3", (req, res) => {
    const a = req.params.numA
    const b = req.params.numB

    let c = a + b;
    
    //res.send(`${page}`);
    res.send(`${c}`);
});

// app.set('/', (req, res) => {
//     req.json({num:2});
// });

app.listen(PORT, () => console.log(`++++start++++++ ${PORT}`));