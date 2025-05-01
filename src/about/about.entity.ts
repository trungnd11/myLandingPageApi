import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class About {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column() name: string;
  @Column() email: string;
  @Column("int") age: number;
  @Column() from: string;
  @Column("text") description: string;
  @Column({ nullable: true }) avatarUrl: string;
  @Column({ type: "varchar", nullable: true })
  title: string;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
