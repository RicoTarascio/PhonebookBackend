import { NextFunction } from "express";

const restApi = async (next: NextFunction, service: Function) => {
  return service().catch((err: Error) => next(err));
};

export default restApi;
