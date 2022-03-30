const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());

app.get("/numA/:intA/numB/:intB", (req, res) => {
    const a = parseInt(req.params.intA);
    const b = parseInt(req.params.intB);

    let c = a + b;
    let d = a * b;

    let objA = new Object();

    objA.numA = c;
    objA.numB = d;

    res.json(objA);
});

app.listen(PORT, () => console.log(`++++start++++++ ${PORT}`));
