import { Router } from "express";
import indexController from "../controllers/indexController.js";
import developerController from "../controllers/developerController.js";
import gameController from "../controllers/gameController.js";
import newDeveloperController from "../controllers/newDeveloperController.js";
import deleteDeveloperController from "../controllers/deleteDeveloperController.js";
import modifyDeveloperController from "../controllers/modifyDeveloperController.js";

const indexRouter = Router();

indexRouter.get("/", indexController);

indexRouter.get("/favicon.ico", (req, res) => res.status(204));

indexRouter.post("/delete/:developer", deleteDeveloperController);

indexRouter.post("/new-developer", newDeveloperController);

indexRouter.get("/:developer", developerController);

indexRouter.post("/:developer/modify", modifyDeveloperController);

indexRouter.get("/:developer/:game", gameController);

export default indexRouter;
