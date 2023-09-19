import 'dotenv/config';
class DbParameters {
  readonly db_port: string;
  readonly db_host: string;
  readonly db_username: string;
  readonly db_password: string;
  readonly db_name: string;

  constructor(mode: string) {
    if (mode === 'dev') {
      this.db_host = process.env.DB_HOST_DEV;
      this.db_username = process.env.DB_USER_DEV;
      this.db_password = process.env.DB_PASS_DEV;
      this.db_port = process.env.DB_PORT_DEV;
      this.db_name = process.env.DB_NAME_DEV;
    } else if (mode === 'prod') {
      this.db_host = process.env.DB_HOST_PROD;
      this.db_username = process.env.DB_USER_PROD;
      this.db_password = process.env.DB_PASS_PROD;
      this.db_port = process.env.DB_PORT_PROD;
      this.db_name = process.env.DB_NAME_PROD;
    } else {
      this.db_host = process.env.DB_HOST_TEST;
      this.db_username = process.env.DB_USER_TEST;
      this.db_password = process.env.DB_PASS_TEST;
      this.db_port = process.env.DB_PORT_TEST;
      this.db_name = process.env.DB_NAME_TEST;
    }
  }
}

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
