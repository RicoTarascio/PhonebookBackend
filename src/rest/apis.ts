import { Contact } from "@prisma/client";
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import {
  createContact,
  deleteAllContacts,
  deleteContactById,
  retrieveAllContacts,
  retrieveContactById,
  retrieveContactByPhone,
  retrieveContactsByName,
} from "../services/contanctService";
const restRouter = express.Router();

const restApi = async (next: NextFunction, service: Function) => {
  return service().catch((err: Error) => next(err));
};

restRouter.get("/contacts", (req, res, next) => {
  restApi(next, async () => {
    if (req.query.id) {
      return retrieveContactById(
        +req.query.id,
        !!req.query.includeCategory
      ).then((contact) => {
        res.json(contact);
      });
    }
    if (req.query.telephoneNum) {
      return retrieveContactByPhone(
        "" + req.query.telephoneNum,
        !!req.query.includeCategory
      ).then((contacts) => {
        res.json(contacts);
      });
    }
    if (req.query.name) {
      return retrieveContactsByName(
        "" + req.query.name,
        !!req.query.includeCategory
      ).then((contacts) => {
        res.json(contacts);
      });
    } else {
      return retrieveAllContacts(!!req.query.includeCategory).then(
        (contacts) => {
          res.json(contacts);
        }
      );
    }
  });
});

restRouter.post("/contacts", (req, res, next) => {
  restApi(next, async () => {
    if (!req.body) throw new Error("Body not present or not in JSON format!");

    return createContact(req.body as Contact).then((contact) => {
      res.json(contact);
    });
  });
});

restRouter.delete("/contacts", (req, res, next) => {
  restApi(next, async () => {
    if (req.query.id) {
      return deleteContactById(+req.query.id).then((contact) => {
        res.json(contact);
      });
    } else {
      return deleteAllContacts().then((contacts) => {
        res.json(contacts);
      });
    }
  });
});

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    errorType: "DatabaseError",
    endpoint: req.path,
    message: err.message,
  });
};

restRouter.use(errorMiddleware);

export default restRouter;
