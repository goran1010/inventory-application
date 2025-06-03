import getGame from "../models/getGame.js";

async function gameController(req, res) {
  const gameName = req.params.game;
  const gameDetails = await getGame(gameName);

  res.render("game", { gameDetails, gameName });
}
export default gameController;
