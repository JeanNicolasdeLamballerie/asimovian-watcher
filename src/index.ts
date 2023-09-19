import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from "./routes/router";
import models from './models';
const app = express();
// import sequelize from 'sequelize';
const port = process.env.PORT || 5000;
app.use( cors() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.use( '/api', api );




models
    .sequelize
    .sync( { force: true } )
    .then( () => {
        models.Flag.create( { id: 200 } );
        app.listen( port, () => console.log( `App listening on port ${ port }` )
        );
    }
    );
