import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
      @ObjectIdColumn()
      _id: ObjectId;

      @Column({ default: null })
      username: string;

      @Column({ default: null })
      password: string;
}
