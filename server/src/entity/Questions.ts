import { Entity, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn, ObjectID } from 'typeorm';

@Entity()
export class Questions {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createTime: string;

  @UpdateDateColumn()
  updateTime: string;
}
