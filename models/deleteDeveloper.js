import pool from "../db/pool.js";

export default async function deleteDeveloper(developerName) {
  await pool.query(
    `
    DELETE FROM developer WHERE developer.name = $1;
    `,
    [developerName]
  );
}
