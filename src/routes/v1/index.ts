import { Router } from "express";
import models from "../../models";
import Message from "./message";
import Count from "./count";

// /api/v1/ [here]
const app = Router();
app.use( "/message", Message );
app.use( "/count", Count );
app.get( '/ping', ( _, res ): void => {

  res.status( 200 ).send();


} );
export default app;