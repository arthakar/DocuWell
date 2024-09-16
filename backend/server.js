const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
   res.send('Welcome to the DocuWell Backend!');
});

// Add your endpoints here

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
