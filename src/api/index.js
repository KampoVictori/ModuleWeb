import {Router} from "express";
import photoRouter from "./photo";

const apiRouter = new Router();

apiRouter.use("/photo", photoRouter);

export default apiRouter;