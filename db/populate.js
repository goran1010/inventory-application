#! /usr/bin/env node

import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;

const SQL = `
INSERT INTO developer (name, based_in, employees) 
VALUES
   ('Microsoft Gaming','USA', 20000),
  ('Ubisoft', 'France', 19000),
  ('Take Two','USA', 11000),
  ('Sony', 'Japan', 10000),
  ('EA', 'USA', 9000);

  INSERT INTO game (name, genre, price, developer_id) VALUES
('The Witcher 3: Wild Hunt', 'RPG', 39.99, 5),
('Minecraft', 'Sandbox', 29.99, 4),
('Elden Ring', 'Action', 59.99, 5),
('Stardew Valley', 'Simulation', 14.99, 4),
('Call of Duty: Modern Warfare II', 'FPS', 69.99, 3),
('Hollow Knight', 'Metroidvania', 14.99, 5),
('FIFA 24', 'Sports', 69.99, 2),
('Hades', 'Roguelike', 24.99, 4),
('Animal Crossing: New Horizons', 'Simulation', 59.99, 3),
('Cyberpunk 2077', 'Action', 59.99, 4);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
