const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');
const dotenv = require('dotenv')
const { auth } = require('express-oauth2-jwt-bearer');
const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config()

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your front-end URL
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const jwtCheck = auth({
  audience: 'https://apidocuwell/',
  issuerBaseURL: 'https://dev-d1f6u0mv57siwfca.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

app.use('/apidocuwell', jwtCheck);
app.use('/api', taskRoutes);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error.message);
  });