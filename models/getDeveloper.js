import pool from "../db/pool.js";

export default async function getDeveloper(developerName) {
  const { rows } = await pool.query(
    `
    SELECT developer.name AS developer_name, game.name AS game_name,
    developer.based_in, developer.employees
    FROM developer JOIN game ON developer.id = game.developer_id WHERE developer.name LIKE ($1);`,
    [developerName]
  );
  return rows;
}
