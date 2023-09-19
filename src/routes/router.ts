import { Router } from "express";
import v1 from './v1';
const app = Router();
// /api/ [here]

app.use( '/v1', v1 );


export default app;
//TODO  'http-status-codes'

//TODO
/// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// app.use( ( err: Error, req: Request, res: Response, next: NextFunction ) => {
//     logger.error( err.message, err );
//     return res.status( BAD_REQUEST ).json( {
//         error: err.message,
//     } );
// } );