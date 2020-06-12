const ContextStrategy = require('./src/db/bases/contextStrategy');
const Oracle = require('./src/db/oracle');
const SqlServer = require('./src/db/sqlserver');
const Postgres = require('./src/db/postgres');

const instanceOracle = new ContextStrategy(new Oracle());
instanceOracle.create(); // using Oracle
// instanceOracle.delete(); // if you uncomment this line, you will can see the NotImplmentedException

const instancePostgres = new ContextStrategy(new Postgres());
instancePostgres.create(); // using Postgres
// instancePostgres.delete(); // if you uncomment this line, you will can see the NotImplmentedException

const instanceSqlServer = new ContextStrategy(new SqlServer());
instanceSqlServer.create(); // using Postgres
// instanceSqlServer.delete(); // if you uncomment this line, you will can see the NotImplmentedException