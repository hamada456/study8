const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
    //const package = require("./package-lock.json");
    const apiRoot = "/api";

const a = 2;
const b = 3;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin:/http:\/\/localhost/}));
app.options('*', cors());

const router = express.Router();
router.get("/", (req, res) => {
    res.send(`${a}`);
});

app.use(apiRoot, router);

// app.get('/', (req, res) => {
//     res.send("a");
// });

// app.set('/', (req, res) => {
//     req.json({num:2});
// });

app.listen(PORT, () => console.log(`++++start++++++ ${PORT}`));