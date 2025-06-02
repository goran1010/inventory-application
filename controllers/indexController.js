import getAllDevelopers from "../models/getAllDevelopers.js";

function indexController(req, res) {
  const allDevelopers = getAllDevelopers();
  res.render("index", { allDevelopers });
}

export default indexController;
