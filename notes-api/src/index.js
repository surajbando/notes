const express = require("express");
const noteRouter = require("./routers/note");
const cors = require('cors');
require("./db/mongoose");

const app = express();
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(noteRouter);

app.listen(3000,()=>{
    console.log("app is running on the port 3000");
});