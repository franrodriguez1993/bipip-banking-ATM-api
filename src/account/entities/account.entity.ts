import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'accounts',
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
})
export default class Account extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
  })
  number_account: string;

  @Column({ type: DataType.DECIMAL(10, 2) })
  money: number;

  @Column({
    type: DataType.STRING,
  })
  id_type: string;

  @Column({
    type: DataType.STRING,
  })
  id_user: string;
}
