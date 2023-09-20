import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
})
export default class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
  })
  id: string;

  @Column({ type: DataType.STRING(45) })
  name: string;

  @Column({ type: DataType.STRING(45) })
  lastname: string;

  @Column({ type: DataType.STRING })
  birthday: string;

  @Column({ type: DataType.INTEGER })
  dni: number;

  @Column({ type: DataType.STRING })
  mail: string;

  @Column({ type: DataType.INTEGER })
  cellphone: number;

  @Column({ type: DataType.STRING })
  reference_code: string;

  @Column({ type: DataType.STRING })
  role: string;
}
