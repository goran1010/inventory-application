import pool from "../db/pool.js";

export default async function createNewDeveloper(newDeveloper) {
  const { name, based_in, employees } = newDeveloper;
  await pool.query(
    `INSERT INTO developer (name, based_in, employees) 
    VALUES
    ($1,$2,$3);`,
    [name, based_in, employees]
  );
}
