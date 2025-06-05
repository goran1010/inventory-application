import pool from "../db/pool.js";

export default async function modifyDeveloper(
  name,
  based_in,
  employees,
  developer
) {
  await pool.query(
    `
    UPDATE developer 
    SET name = $1, based_in = $2, employees = $3
    WHERE name = $4;`,
    [name, based_in, Number(employees), developer]
  );
}
