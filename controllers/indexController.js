import getAllDevelopers from "../models/getAllDevelopers.js";

async function indexController(req, res) {
  try {
    const allDevelopers = await getAllDevelopers();
    res.render("index", { allDevelopers });
  } catch (err) {
    throw new Error(err);
  }
}

export default indexController;
