const express = require("express");
const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());

//Routes

app.use("/auth", require("./routes/jwtAuth.js"));

app.use('/auth', require("./routes/login"));

let port = process.env.port || 5000;
app.listen(port, () => {
    console.log('server currently running on port ' + port);
});

