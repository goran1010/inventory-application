import { Router } from "express";
import indexController from "../controllers/indexController.js";
import developerController from "../controllers/developerController.js";
import gameController from "../controllers/gameController.js";

const indexRouter = Router();

indexRouter.get("/", indexController);

indexRouter.get("/:developer", developerController);

indexRouter.get("/:developer/:game", gameController);

export default indexRouter;
