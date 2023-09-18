import { Sequelize } from 'sequelize-typescript';
import { environmentVariables } from '../config/environment.variables';

export const sequelizeProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: environmentVariables.database.db_host,
        port: parseInt(environmentVariables.database.db_port),
        username: environmentVariables.database.db_user,
        password: environmentVariables.database.db_pass,
        database: environmentVariables.database.db_name,
      });
      sequelize.addModels([]), await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
