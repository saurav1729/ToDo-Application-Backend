const express = require("express");
const dbconnect = require("./config/database");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const YAML = require('yamljs'); 

const app = express();
require('dotenv').config();
app.use(express.json());

const todoRoutes= require('./routes/todo')



const swaggerDocument = YAML.load('./swagger.yaml');

app.use("/api/v1",todoRoutes);

app.get("/api/example", (req, res) => {
  res.json({ message: "This is an example endpoint" });
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Basic route for the root
app.get('/', (req, res) => {
  res.send("<h1>Server is running on port 3000</h1>");
});

// Establish database connection
dbconnect();

// Start the server
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
