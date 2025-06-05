import modifyGame from "../models/modifyGame.js";

export default async function modifyGameController(req, res) {
  const { developer, game } = req.params;
  console.log(developer);
  const { name, genre, price, developer_id } = req.body;
  await modifyGame(name, genre, price, developer_id, game);
  res.redirect(`/${developer}/${name}`);
}
