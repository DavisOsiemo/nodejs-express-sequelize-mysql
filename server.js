const express       = require("express")
const bodyParser    = require("body-parser")
const cors          = require("cors")

const app = express();

const db = require("./app/models");
db.sequelize.sync({ force: true }). then(() => {
    console.log("Drop and re-sync db.");
});

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions))

//Parse requests of content-type - application/json
app.use(bodyParser.json());

//Parse requests of content-type - application/x-www-urlencoded
app.use (bodyParser.urlencoded({ extended:  true }));

//Simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Ossy application"});
});

require("./app/routes/tutorial.routes")(app);

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});