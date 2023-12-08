import express, { Express, Request, Response } from "express";

const app = express();
const port = "8080";

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
