import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'type_accounts',
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
})
export default class TypeAccount extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
  })
  id: string;

  @Column({
    type: DataType.STRING(50),
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
  })
  max_extraction: number;

  @Column({
    type: DataType.INTEGER,
  })
  max_cc: number;
}
