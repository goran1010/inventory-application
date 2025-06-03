import createNewDeveloper from "../models/createNewDeveloper.js";

async function newDeveloperController(req, res) {
  const newDeveloper = req.body;
  await createNewDeveloper(newDeveloper);
  res.redirect("/");
}

export default newDeveloperController;
