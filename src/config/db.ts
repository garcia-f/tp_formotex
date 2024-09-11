import { Sequelize } from "sequelize";
import { envs } from "../environments/environments";


const {
    DB_NAME,
    DB_USER,
    DB_HOST,
    DB_DIALECT,
    DB_PASSWORD,
    DB_PORT
} = envs;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
});

// const db = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)

export default db;