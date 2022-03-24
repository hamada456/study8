const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");
//const bodyParser = require("body-parser");

//  http://localhost:3000/numA/3/numB/5
app.get("/numA/:intA/numB/:intB", (req, res) => {
    const a = parseInt(req.params.intA);
    const b = parseInt(req.params.intB);

    let c = a + b;

    res.send(`${c}`);
});

app.listen(PORT, () => console.log(`++++start++++++ ${PORT}`));