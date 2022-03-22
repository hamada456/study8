const exp = require('express');
const app = exp();
const PORT = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
    const package = require("./package.json");
    const apiRoot = "/api"

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options('*', cors());

// app.get('/', (req, res) => {
//     res.send('hello2222');
// });

const router = exp.Router();
router.get('/', (req, res) => {
     res.send(`${package.description} - v${package.version}`);
});

app.use(apiRoot,router);

app.listen(PORT, () => console.log(`++++start++++++ ${PORT}`));