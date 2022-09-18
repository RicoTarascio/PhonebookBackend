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

contactRest.post("/contacts", (req, res, next) => {
  restApi(next, async () => {
    if (!req.body) throw new Error("Body not present or not in JSON format!");

    return createContact(req.body as Contact).then((contact) => {
      res.json(contact);
    });
  });
});

contactRest.delete("/contacts", (req, res, next) => {
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

export default contactRest;
