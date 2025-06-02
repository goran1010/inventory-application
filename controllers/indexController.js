import getAllDevelopers from "../models/getAllDevelopers.js";

async function indexController(req, res) {
  const allDevelopers = await getAllDevelopers();
  res.render("index", { allDevelopers });
}

export default indexController;
