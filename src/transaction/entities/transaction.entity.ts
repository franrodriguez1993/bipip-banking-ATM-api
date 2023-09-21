import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'transactions',
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
})
export default class Transaction extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  id: string;

  @Column({ type: DataType.STRING })
  id_creditcard: string;

  @Column({ type: DataType.DECIMAL(12, 2) })
  amount: number;

  @Column({ type: DataType.STRING })
  type_transaction: string;

  @Column({ type: DataType.DATE })
  date: string;
}
