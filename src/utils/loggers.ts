import { ErrorRequestHandler, RequestHandler } from "express";

const apisInfoLogger: RequestHandler = (req, res, next) => {
  console.log("\n\nℹ️ An endpoint as been hit!\n");
  console.log(" • Endpoint:", req.path);
  console.log(" • Method:", req.method);
  console.log(" • Params:", req.params);
  console.log(" • Query:", req.query);
  console.log(" • Body:", req.body);
  console.log("\n-----------\n");
  next();
};

const apisErrorLogger: ErrorRequestHandler = (err, req, res, next) => {
  console.log("\n\n❌ An error as occurred!\n");
  console.log(" • Endpoint:", req.path);
  console.log(" • Method:", req.method);
  console.log(" • Params:", req.params);
  console.log(" • Query:", req.query);
  console.log(" • Body:", req.body);
  console.log(" • Error:", err.message);

  console.log("\n-----------\n");
  next(err);
};

export { apisInfoLogger, apisErrorLogger };
