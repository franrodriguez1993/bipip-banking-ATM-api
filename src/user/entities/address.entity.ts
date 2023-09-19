import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'addresses' })
export default class Address extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
  })
  id: string;

  @Column({ type: DataType.STRING })
  street: string;

  @Column({ type: DataType.INTEGER })
  number: number;

  @Column({ type: DataType.INTEGER })
  postal_code: number;

  @Column({ type: DataType.STRING })
  city: string;

  @Column({ type: DataType.STRING })
  id_user: string;
}
