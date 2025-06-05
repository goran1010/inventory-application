import createNewGame from "../models/createNewGame.js";
import getDeveloperByID from "../models/getDeveloperByID.js";

async function newGameController(req, res) {
  const newGame = req.body;
  await createNewGame(newGame);
  const rows = await getDeveloperByID(newGame.developer_id);
  const developerName = rows[0].name;
  res.redirect(`/${developerName}`);
}

export default newGameController;
