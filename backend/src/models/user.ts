import { RowDataPacket } from 'mysql2';
import pool from '../utils/mysql';

export interface IUser {
  email: string;
  password: string;
}

const join = async ({ email, password }: IUser) => {
  try {
    const sql = 'INSERT INTO users (email, encrypted_password) VALUES (?,?)';
    const values = [email, password];

    const [results] = await pool.execute(sql, values);
    return results;
  } catch (error) {
    console.error('회원가입 중 오류 발생:', error);
    throw new Error('회원가입 실패');
  }
};

const login = async (email: Pick<IUser, 'email'>) => {
  try {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const [results] = await pool.execute<RowDataPacket[]>(sql, email);

    return results[0];
  } catch (error) {
    console.log('로그인 중 오류 발생: ', error);
    throw new Error('로그인 실패');
  }
};

export default { join, login };
