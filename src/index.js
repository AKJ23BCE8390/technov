import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// MongoDB Connection


mongoose.connect('mongodb+srv://iamkrishnagoyal:Hopelift123@hopelift.logiw.mongodb.net/yourDatabaseName?retryWrites=true&w=majority', {
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB:', err));

// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});


// Start Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
