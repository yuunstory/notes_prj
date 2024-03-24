import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3031;
export const HOST = process.env.HOST;
export const USER = process.env.DB_USER;
export const PASSWORD = process.env.DB_PASSWROD;
export const DATABASE = process.env.DB_DATABASE;
