import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'credit_cards',
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
})
export default class Creditcard extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  id: string;

  @Column({ type: DataType.STRING })
  id_user: string;

  @Column({ type: DataType.STRING })
  number_account: string;

  @Column({ type: DataType.STRING })
  number_card: string;

  @Column({ type: DataType.STRING })
  password: string;

  @Column({ type: DataType.STRING })
  expiration: string;

  @Column({ type: DataType.INTEGER })
  code: number;
}
