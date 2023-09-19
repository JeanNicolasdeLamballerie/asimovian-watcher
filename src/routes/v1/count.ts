import { Router } from "express";
import models from "../../models";

// /api/v1/count/ [here]
const app = Router();
app.get( '/flags', async ( req, res ) => {
    try
    {
        const count = await models.Flag.count();
        res.send( { count } );

    }
    catch ( err )
    {
        console.log( err );
        res.status( 401 ).send( 'Server Error' );

    }

} );
app.get( '/messages/:flag', async ( req, res ) => {
    try
    {
        let count: number;
        const flag = req.params.flag;
        if ( flag === "0" )
        {
            count = await models.Message.count();
        } else
        {
            count = await models.Message.count( { where: { flag } } );
        }
        res.json( count );
    }
    catch ( err )
    {

        res.status( 401 ).send( 'Bad Request' );
    }


} );


app.get( '/ping', ( _, res ): void => {

    res.status( 200 ).send();


} );
export default app;