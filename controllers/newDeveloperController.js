import createNewDeveloper from "../models/createNewDeveloper.js";
import { body, validationResult } from "express-validator";

const alphaErr = "must only contain letters.";

const validateUser = [
  body("name").trim().isAlpha().withMessage(`First name ${alphaErr}`),
];

const newDeveloperController = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
      return;
    }
    const newDeveloper = req.body;
    await createNewDeveloper(newDeveloper);
    res.redirect("/");
  },
];

export default newDeveloperController;
