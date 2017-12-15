const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
const mc = require("./controllers/mainController");

const app = express();

app.use(cors());
app.use(json());

require("dotenv").config();

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
});

// app.get('/api/bins/:id') // get all shelf by id -- when user selects witch shelf to see

// app.get('/api/bin/:id') // get bin by id -- when a user selects a bin
// app.put('/api/bin/:id') // update bin by id -- when a user edits an existing item
// app.delete('/api/bin/:id') // delete bin by id -- when a user deletes an existing item
// app.post('/api/bin/:id') // create bin with id -- when a user adds an item to an empty bin

const port = 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
