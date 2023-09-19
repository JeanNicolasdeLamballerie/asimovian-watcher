import { Router } from "express";
import models from "../../models";
// /api/v1/message/ [here]

const app = Router();
app.post( '/:flag', async ( req, res ) => {
    const flagStr = req.params.flag;
    const val = req.body as {
        url?: string,
        type?: string,
        event?: Object | string,
        version: string,
        timestamp: Date,
        isError: boolean;
    } || undefined;
    console.log( val, flagStr );
    try
    {

        const flag = Number.parseInt( flagStr );

        if ( !val || !flag )
        {
            res.status( 402 ).send( 'Bad Request (Flag or data Missing)' );
            return;
        }
        // const { version, timestamp, isError } = val;
        const event = JSON.stringify( val.event ) || val.event as string;

        await models.Message
            .create( { ...val, event, flag } );
        res.status( 200 ).send( 'OK' );

    }
    catch ( err )
    {
        console.log( err );
        res.status( 401 ).send( 'Server Error' );

    }

} );
app.get( '/:flag', async ( req, res ) => {
    try
    {
        const values = await models.Message
            .findAll();
        console.log( values );
        console.log( await models.Message.findAll( { where: { id: 1 } } ) );
        res.status( 200 ).send( values );
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