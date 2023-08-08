import express, { Router, json, urlencoded } from "express";
import "reflect-metadata";
import { initializeDatabase, postGresDataSource } from "./app-data-source.ts";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./auto-gen/routes.ts";
import swaggerJson from "./auto-gen/swagger.json";
import cors from "cors";

if (!postGresDataSource.isInitialized) await initializeDatabase();

export const AppRoutesAndMiddleware = Router();

AppRoutesAndMiddleware.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
  })
);
AppRoutesAndMiddleware.use(urlencoded({ extended: true }));
AppRoutesAndMiddleware.use(json());

RegisterRoutes(AppRoutesAndMiddleware);
AppRoutesAndMiddleware.use(["/swagger"], swaggerUi.serve, swaggerUi.setup(swaggerJson));
AppRoutesAndMiddleware.get("/api/hc", (_, res) => res.json({ message: "Healthy" }));

//SERVE STATIC FILES?
const frontendFiles = process.cwd() + "/dist";
AppRoutesAndMiddleware.use(express.static(frontendFiles));

if (!process.env["VITE"]) {
  // customRouter.get("/*", (_, res) => {
  //   res.send(frontendFiles/* + "/index.html"*/);
  // });
  // app.listen(process.env["PORT"]);
}
