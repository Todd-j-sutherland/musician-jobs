// server.js
const express = require("express");
const mongoose = require("mongoose");
const Profile = require("./models/Profile");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/profile", async (req, res) => {
  const profile = new Profile(req.body);
  await profile.save();
  res.status(201).json(profile);
});

app.get("/api/profiles", async (req, res) => {
  const profiles = await Profile.find(req.query);
  res.status(200).json(profiles);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
