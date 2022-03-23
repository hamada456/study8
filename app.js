const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

//  http://localhost:3000?numA/2/numB/3

app.get("/numA/2/numB/3", (req, res) => {
    //URLの?以降を取得
    let pageNumB = window.location.search;
    //一文字目の?を取り除く
    pageNumB = pageNumB.substring(1);
    //
    const page = pageNumB.replace(/[^0-9]/g, '');
    //
    
    // let c = a + b;
    res.send(`${page}`);
    //res.send("a");
});

// app.set('/', (req, res) => {
//     req.json({num:2});
// });

app.listen(PORT, () => console.log(`++++start++++++ ${PORT}`));