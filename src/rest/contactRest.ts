import { Contact } from "@prisma/client";
import express from "express";
import {
  createContact,
  deleteAllContacts,
  deleteContactById,
  retrieveAllContacts,
  retrieveContactById,
  retrieveContactByPhone,
  retrieveContactsByName,
} from "../services/contanctService";
import restApi from "../utils/restApi";
const contactRest = express.Router();

contactRest.get("/contacts", (req, res, next) => {
  restApi(res, next, async () => {
    if (req.query.id) {
      return retrieveContactById(+req.query.id, !!req.query.includeCategory);
    }
    if (req.query.telephoneNum) {
      return retrieveContactByPhone(
        "" + req.query.telephoneNum,
        !!req.query.includeCategory
      );
    }
    if (req.query.name) {
      return retrieveContactsByName(
        "" + req.query.name,
        !!req.query.includeCategory
      );
    } else {
      return retrieveAllContacts(!!req.query.includeCategory);
    }
  });
});

contactRest.post("/contacts", (req, res, next) => {
  restApi(res, next, async () => {
    if (!req.body) throw new Error("Body not present or not in JSON format!");

    return createContact(req.body as Contact);
  });
});

contactRest.delete("/contacts", (req, res, next) => {
  restApi(res, next, async () => {
    if (req.query.id) {
      return deleteContactById(+req.query.id);
    } else {
      return deleteAllContacts();
    }
  });
});

export default contactRest;
