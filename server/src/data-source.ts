import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Answers } from './entity/Answers';
import { Questions } from './entity/Questions';
import data from './data';
export const AppDataSource = new DataSource({
  type: 'mongodb',
  database: 'free',
  synchronize: true,
  host: data.CAREFREE_HOST || '127.0.0.1',
  port: Number(data.CAREFREE_PORT || '8999'),
  username: data.CAREFREE_USERNAME,
  password: data.CAREFREE_PASSWORD,
  logging: false,
  entities: [Answers, Questions],
  migrations: [],
  subscribers: [],
});
