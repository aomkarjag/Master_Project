const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const active_fields_routes=require("./routes/active_field_routes");
const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();
app.use(cors());
app.use(express.json());
// MongoDB connection
// mongoose.connect('mongodb://localhost:27017/nodes_links', { useNewUrlParser: true, useUnifiedTopology: true });
connectDB(); // connection to mongoDB


app.use("/", active_fields_routes)


app.listen(3000, () => console.log('Server running on http://localhost:3000'));
