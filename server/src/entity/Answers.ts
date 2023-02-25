import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Answers {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  questionId: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createTime: string;

  @UpdateDateColumn()
  updateTime: string;
}
