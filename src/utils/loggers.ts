import { NextFunction, Request, Response } from "express";

const apisInfoLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log("\n\nℹ️ An endpoint as been hit!\n");
  console.log(" • Endpoint:", req.path);
  console.log(" • Method:", req.method);
  console.log(" • Params:", req.params);
  console.log(" • Query:", req.query);
  console.log(" • Body:", req.body);
  console.log("\n-----------\n");
  next();
};

export { apisInfoLogger };
