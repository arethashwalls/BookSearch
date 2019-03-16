const express = require('express'),
      path = require('path'),
      mongoose = require('mongoose'),
      PORT = process.env.PORT || 3001,
      app = express();

// Define middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets:
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//Database setup:
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';
mongoose.connect( mongoURI,  { useNewUrlParser: true });

// Define API routes here
const apiRouter = require('./routes/apiRoutes');
app.use('/api/', apiRouter);

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));