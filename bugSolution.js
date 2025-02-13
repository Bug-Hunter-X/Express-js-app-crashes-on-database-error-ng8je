const express = require('express');
const app = express();

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.get('/users/:id', (req, res, next) => {
  const userId = req.params.id;
  try {
    db.getUser(userId, (err, user) => {
      if (err) {
        return next(err); // Pass the error to the error handling middleware
      } else {
        res.json(user);
      }
    });
  } catch (error) {
    next(error);
  }
});