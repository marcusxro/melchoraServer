const mongoose = require('mongoose');

const atlasUri = 'uri';

mongoose.connect(atlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB Atlas (Data)");
  })
  .catch((e) => {
    console.error("Error connecting to MongoDB Atlas:", e);
  });

const mySchema = new mongoose.Schema({
  Date: {
    type: String,
    required: true,
  },
  Time: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  LRN: {
    type: String,
    required: true,
  },
});


const Ingredients = mongoose.model('status', mySchema);

module.exports = Ingredients;
