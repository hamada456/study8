const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");

app.get('/', (req, res) => {
    res.send('hello2222');
    res.send('hello3333');
    req.send('hello4444');
});

// app.set('/', (req, res) => {
//     req.json({num:2});
// });

app.listen(PORT, () => console.log(`++++start++++++ ${PORT}`));