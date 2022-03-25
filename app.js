const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");
//const os = require("os");
//const bodyParser = require("body-parser");
app.use(cors());
//http://localhost:3000/numA/3/numB/5
app.get("/numA/:intA/numB/:intB", (req, res) => {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    const a = parseInt(req.params.intA);
    const b = parseInt(req.params.intB);

    let c = a + b;
    let d = a * b;

    let objA = new Object();

    objA.num1 = c;

    res.json(objA);
});

app.listen(PORT, () => console.log(`++++start++++++ ${PORT}`));
