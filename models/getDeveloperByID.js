import pool from "../db/pool.js";

export default async function getDeveloperByID(developer_id) {
  const { rows } = await pool.query(
    `
    SELECT name FROM developer WHERE developer.id = $1;`,
    [Number(developer_id)]
  );

  return rows;
}
