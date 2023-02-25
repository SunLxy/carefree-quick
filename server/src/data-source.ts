import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Answers } from './entity/Answers';
import { Questions } from './entity/Questions';
import data from './data';
export const AppDataSource = new DataSource({
  type: 'mongodb',
  database: 'free',
  synchronize: true,
  host: '127.0.0.1',
  port: 8999,
  username: data.CAREFREE_USERNAME,
  password: data.CAREFREE_PASSWORD,
  logging: false,
  entities: [Answers, Questions],
  migrations: [],
  subscribers: [],
});
