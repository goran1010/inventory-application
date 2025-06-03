import pool from "../db/pool.js";

export default async function getGame(gameName) {
  const { rows } = await pool.query(
    `
    SELECT developer.name AS developer_name, game.name AS game_name,
    game.price, game.genre
    FROM developer JOIN game ON developer.id = game.developer_id WHERE game.name = ($1);`,
    [gameName]
  );
  return rows;
}
