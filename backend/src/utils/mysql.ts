import mariadb from 'mysql2/promise';
import { HOST, USER, DATABASE, PASSWORD } from '../settings';

const pool = mariadb.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

export default pool;
