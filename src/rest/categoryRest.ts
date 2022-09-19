import { Category } from "@prisma/client";
import express from "express";
import {
  createCategory,
  deleteAllCategories,
  deleteCategoryById,
  retrieveAllCategories,
  retrieveCategoryById,
  retrieveCategoryByName,
} from "../services/categoryService";

import restApi from "../utils/restApi";

const categoryRest = express.Router();

categoryRest.get("/category", (req, res, next) => {
  restApi(res, next, async () => {
    if (req.query.id) {
      return retrieveCategoryById(+req.query.id, !!req.query.includeContacts);
    } else if (req.query.name) {
      return retrieveCategoryByName(
        "" + req.query.name,
        !!req.query.includeContacts
      );
    } else {
      return retrieveAllCategories(!!req.query.includeContacts);
    }
  });
});

categoryRest.post("/category", (req, res, next) => {
  restApi(res, next, async () => {
    if (!req.body) throw new Error("Body not present or not in JSON format!");

    return createCategory(req.body as Category);
  });
});

categoryRest.delete("/category", (req, res, next) => {
  restApi(res, next, async () => {
    if (req.query.id) {
      return deleteCategoryById(+req.query.id);
    } else {
      return deleteAllCategories();
    }
  });
});

export default categoryRest;
