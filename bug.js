const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // No error handling here, this will crash the server
      console.error(err);
    } else {
      res.json(user);
    }
  });
});