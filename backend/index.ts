import express, { Express, Request, Response } from "express";
import {
  getCityList,
  getCityByPostalCode,
  updateCityByPostalCode,
  deleteCityByPostalCode,
} from "./routes/routes";

const app = express();
const port = "8080";
// middleware
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/cities", (req: Request, res: Response) => {
  getCityList(req, res);
});

app.get("/cities/:postalCode", (req: Request, res: Response) => {
  getCityByPostalCode(req, res);
});

app.put("/cities/:postalCode", (req: Request, res: Response) => {
  updateCityByPostalCode(req, res);
});

app.delete("/cities/:postalCode", (req: Request, res: Response) => {
  deleteCityByPostalCode(req, res);
});

app.listen(port, () => {
  console.log(`⚡️[server]: sss is running at http://localhost:${port}`);
});
