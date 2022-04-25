const express = require('express');
const cors = require('cors');
// get MongoDB driver connection
const dbo = require('./db/connection');

const PORT = 5001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./routes/branch'));

// Global error handling
app.use(function (err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(5001, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});