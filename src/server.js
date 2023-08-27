const express = require('express')
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


const routes = require('./routes');
app.use(routes)

const PORT = 7777;
app.listen(PORT, () => console.log("Server running on port", PORT));