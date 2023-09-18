import DbParameters from './db.parameters';

const dbParameters = new DbParameters(process.env.MODE);

export const environmentVariables = {
  port: process.env.PORT,
  mode: process.env.MODE,
  database: {
    db_port: dbParameters.db_port,
    db_host: dbParameters.db_host,
    db_user: dbParameters.db_username,
    db_pass: dbParameters.db_password,
    db_name: dbParameters.db_name,
  },
};
