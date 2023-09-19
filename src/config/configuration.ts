// import { Options } from '@sequelize/core';
// import configuration from './config.json';

console.log( process.env );
const configuration = {
    "development": {
        "username": process.env?.MYSQL_USER || "user",
        "password": process.env?.MYSQL_PASSWORD || "password",
        "database": process.env?.MYSQL_DATABASE || "database",
        "host": process.env?.MYSQL_HOST || "dbhost",
        "dialect": "mysql"
    },
};
type environments = 'development'; // | 'test' | 'production';
export const _ENV = ( process.env.NODE_ENV || 'development' ) as environments;
export const config = configuration[ _ENV ];
console.log( config );