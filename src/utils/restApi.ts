import { NextFunction } from "express";
import { Response } from "express-serve-static-core";

const restApi = async (
  res: Response,
  next: NextFunction,
  service: Function
) => {
  return service()
    .then((data: unknown) => res.json(data))
    .catch((err: Error) => next(err));
};

export default restApi;
