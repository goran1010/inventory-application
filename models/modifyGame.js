import pool from "../db/pool.js";

export default async function modifyGame(
  name,
  genre,
  price,
  developer_id,
  game
) {
  await pool.query(
    `
    UPDATE game 
    SET name = $1, genre = $2, price = $3, developer_id = $4
    WHERE name = $5;`,
    [name, genre, Number(price), Number(developer_id), game]
  );
}
