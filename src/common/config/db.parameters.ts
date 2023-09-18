export default class DbParameters {
  readonly db_port: string;
  readonly db_host: string;
  readonly db_username: string;
  readonly db_password: string;
  readonly db_name: string;

  constructor(mode: string) {
    switch (mode) {
      case 'dev':
        this.db_host = process.env.DB_HOST_DEV;
        this.db_username = process.env.DB_USER_DEV;
        this.db_password = process.env.DB_PASS_DEV;
        this.db_port = process.env.DB_PORT_DEV;
        this.db_name = process.env.DB_NAME_DEV;
      case 'prod':
        this.db_host = process.env.DB_HOST_PROD;
        this.db_username = process.env.DB_USER_PROD;
        this.db_password = process.env.DB_PASS_PROD;
        this.db_port = process.env.DB_PORT_PROD;
        this.db_name = process.env.DB_NAME_PROD;
      default:
        this.db_host = process.env.DB_HOST_TEST;
        this.db_username = process.env.DB_USER_TEST;
        this.db_password = process.env.DB_PASS_TEST;
        this.db_port = process.env.DB_PORT_TEST;
        this.db_name = process.env.DB_NAME_TEST;
    }
  }
}
