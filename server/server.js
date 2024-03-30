import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import CategoryModel from './models/categories.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:4000"],
    credentials: true
}));

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html")));

const atlasConnectionString = 'mongodb+srv://maddalahima:hima002@mernvercel.ac9jcnz.mongodb.net/demo';
mongoose.connect(atlasConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB successfully");

    // Listening to requests if DB connection is successful
    app.listen(4000, "localhost", () => console.log("Listening to port 4000"));
  })
  .catch((err) => console.log(err));

app.get('/fetchcategories', async (req, res) => {
    try {
      // Fetch all categories from the database
      const categories = await CategoryModel.find();
      res.json(categories); // Send the categories as JSON response
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(3001, () => { 
  console.log("Server is Running");
});
