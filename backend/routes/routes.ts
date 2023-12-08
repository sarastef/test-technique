import { Request, Response } from "express";
const fs = require("fs");

type Coordinates = string[][];
interface City {
  datasetid: string;
  recordid: string;
  fields: {
    nom_de_la_commune: string;
    libelle_d_acheminement: string;
    code_postal: string;
    coordonnees_gps: Coordinates;
    code_commune_insee: string;
  };
  geometry: { type: string; coordinates: Coordinates };
  record_timestamp: string;
}

const getCityList = (req: Request, res: Response) => {
  fs.readFile(
    "../resources/laposte_hexasmal.json",
    "utf8",
    (error: Error, data: string) => {
      if (error) {
        console.log(error);
        return;
      }
      const cities: City[] = JSON.parse(data);
      res.send(cities);
    }
  );
};

const getCityByPostalCode = (req: Request, res: Response) => {
  fs.readFile(
    "../resources/laposte_hexasmal.json",
    "utf8",
    (error: Error, data: string) => {
      if (error) {
        console.log(error);
        return;
      }
      const cities: City[] = JSON.parse(data);
      const postalCode = req.params.postalCode;
      const city = cities.find(
        (city) => city.fields.code_postal === postalCode
      );
      res.send(city);
    }
  );
};

const updateCityByPostalCode = (req: Request, res: Response) => {
  fs.readFile(
    "../resources/laposte_hexasmal.json",
    "utf8",
    (error: Error, data: string) => {
      if (error) {
        console.log(error);
        return;
      }
      const cities: City[] = JSON.parse(data);
      const postalCode = req.params.postalCode;
      const city = cities.find(
        (city) => city.fields.code_postal === postalCode
      ) as City;

      city.fields.nom_de_la_commune = req.body.fields.nom_de_la_commune;
      city.fields.libelle_d_acheminement =
        req.body.fields.libelle_d_acheminement;
      city.fields.code_postal = req.body.fields.code_postal;
      city.fields.coordonnees_gps = req.body.fields.coordonnees_gps;
      city.fields.code_commune_insee = req.body.fields.code_commune_insee;
      city.geometry = req.body.geometry;
      city.record_timestamp = req.body.record_timestamp;

      // update cities
      const index = cities.indexOf(city);
      cities.splice(index, 1);
      cities.push(city);

      fs.writeFile(
        "../resources/laposte_hexasmal.json",
        JSON.stringify(cities),
        (error: Error) => {
          if (error) {
            console.log(error);
            return;
          }
        }
      );
    }
  );
};

const deleteCityByPostalCode = (req: Request, res: Response) => {
  fs.readFile(
    "../resources/laposte_hexasmal.json",
    "utf8",
    (error: Error, data: string) => {
      if (error) {
        console.log(error);
        return;
      }
      const cities: City[] = JSON.parse(data);
      const postalCode = req.params.postalCode;
      const city = cities.find(
        (city) => city.fields.code_postal === postalCode
      ) as City;
      const index = cities.indexOf(city);
      cities.splice(index, 1);
      fs.writeFile(
        "./resources/laposte_hexasmal.json",
        JSON.stringify(cities),
        (error: Error) => {
          if (error) {
            console.log(error);
            return;
          }
        }
      );
    }
  );
};

export {
  getCityList,
  getCityByPostalCode,
  updateCityByPostalCode,
  deleteCityByPostalCode,
};
