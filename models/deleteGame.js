import pool from "../db/pool.js";

export default async function deleteGame(gameName) {
  await pool.query(
    `
    DELETE FROM game WHERE name = $1;
    `,
    [gameName]
  );
}
