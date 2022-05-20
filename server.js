import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import io from './server/utils/socketApi.js';

import routes from './server/routes/index.js';

const port = process.env.PORT || 5500;
const mongodbURI = process.env.MONGODB_URI;


// Main entry point
const app = express();
const server = http.createServer(app);
io.attach(server);

// Middleware
app.use(express.json());

// DB connection
mongoose.connect(mongodbURI, {useNewURLParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// Routes
app.get('/', (req, res) => {
  res.send("Root route");
});

app.use('/api/auth', routes.authRoutes);
app.use('/api/game', routes.gameRoutes);

server.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});