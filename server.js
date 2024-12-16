const express = require('express');
const cors = require('cors');

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

//get
app.get('/', (req, res) => {res.send("API is working well")});

// Server
app.listen({port}, () => console.log(`API running on http://localhost:${port}`));