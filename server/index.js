const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://kanaujiyar38:rakesh123@cluster0.uljhoqg.mongodb.net/chart')
.then(console.log('Connected to MongoDB'))
.catch((error)=>console.log(error));


const DataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: [String],
  region: String,
  city: String,
  end_year: Number,
  sector: String,
  pest: String,
  source: String,
  swot: String
});

const Data = mongoose.model('Data', DataSchema);

app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
