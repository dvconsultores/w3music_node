import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: "shopping_cart" })
export class ShoppingCartEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => UserEntity, {
    onDelete: "CASCADE",
  })
  user!: UserEntity;

  @Column({
    name: "token_id",
    nullable: false,
  })
  tokenId!: string;
}
