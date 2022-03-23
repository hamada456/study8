const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

// app.use(exp.urlencoded({ extended: true }));
// app.use(exp.json());

app.get('/', (req, res) => {
    let c = a + b;
    res.send(`${c}`);
});

// app.set('/', (req, res) => {
//     req.json({num:2});
// });

app.listen(PORT, () => console.log(`++++start++++++ ${PORT}`));