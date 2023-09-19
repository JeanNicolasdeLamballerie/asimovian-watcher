import Sequelize, { ModelStatic } from "@sequelize/core";
import { config } from "../config/configuration";
import { Message } from './message';
import { Flag } from './flag';


// ! ----------------------- Modify this for different models ----------------------- !

//? Import models and initialize them here
const Models: MODELS = {
    Message,
    Flag
};
type MODELS = {
    Message: typeof Message,
    Flag: typeof Flag,
};

// ! -------------------------------------------------------------------------------- !



const sequelize = new Sequelize( config.database, config.username, config.password, {
    dialect: config.dialect as 'mysql',
    host: config.host,
    models: Object.values( Models ),
} );

interface FINAL_MODELS extends MODELS {
    sequelize: Sequelize;
    Sequelize: typeof Sequelize;
}

const models = {
    ...Models,
    sequelize,
    Sequelize,
} as FINAL_MODELS;
// Casting is required since the db should NOT work if the specified, used models do not exist.
export default models;