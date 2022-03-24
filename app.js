const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");
const os = require("os");
//const bodyParser = require("body-parser");

//  http://localhost:3000/numA/3/numB/5
app.get("/numA/:intA/numB/:intB", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    const a = parseInt(req.params.intA);
    const b = parseInt(req.params.intB);

    let c = a + b;
    let d = a * b;

    res.json(`足し算：${c}掛け算：${d}`);
});

app.listen(PORT, () => console.log(`++++start++++++ ${PORT}`));
