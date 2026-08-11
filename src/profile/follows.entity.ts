import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('follows')
export class FollowsEntity {
import '../profile/profile.controller';  // bc-test backward

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  followerId: number;

  @Column()
  followingId: number;

}
