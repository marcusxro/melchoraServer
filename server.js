const express = require('express')
const cors = require('cors')

const app = express()
const DataCol = require('./collection/Data')


app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS


app.post('/sendStatus', async (req, res) => {
  const { Date, LRN, Status,Time } = req.body;

  try {
    // Validate required fields
    if (!Date || !LRN || !Status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const dataSend = new DataCol({
      Date,
      LRN,
      Status,
      Time
    });

    await dataSend.save();
    res.status(201).json({ message: 'Activity saved successfully' });
  } catch (error) {
    console.error('Error saving activity:', error);
    res.status(500).json({ error: 'Error saving activity' });
  }
});


app.get('/getStatus', (req, res) => {
  DataCol.find()
    .then((resp) => {
      res.json(resp)
    }).catch((err) => { console.log(err) })
})
app.get('/', (req, res) => {
  res.send("connected")
})





app.listen(8080, () => {
  console.log("listening to port 8080")
})