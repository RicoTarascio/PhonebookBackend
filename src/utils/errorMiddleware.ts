import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    errorType: "DatabaseError",
    endpoint: req.path,
    message: err.message,
  });
  next();
};

export default errorMiddleware;
