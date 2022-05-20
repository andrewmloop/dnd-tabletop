import express from "express";

const gameRoutes = express.Router();

gameRoutes.get('/ping', (req, res) => {
  res.send('pong');
});

export default gameRoutes;