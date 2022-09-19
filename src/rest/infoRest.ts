import express from "express";

import restApi from "../utils/restApi";
const infoRest = express.Router();

infoRest.get("/contacts", (req, res, next) => {
  res.json({
    getContacts: {
      description: "Returns a contact or a list of contacts",
      method: "GET",
      queryParams: "id | name | telephoneNum & includeCategory?",
      returns: `If no query is provided, will return all contacts.
                If id or telephoneNum is passed, returns a contact object with that id or telephoneNum, returns an error if no contact is found. 
                If name is passed returns a list of contacts with that name or an empty list otherwise.
                If includeCategory is set to true, the response will include the category for each user`,
    },
    addContacts: {
      description: "Adds a contact and return the added contact",
      method: "POST",
      body: {
        telephoneNum: "The contact telephone number, string",
        name: "The contact name, string",
        surname: "The contact surname, string",
        categoryId: "A category id",
      },
      returns: `Returns the added contact or an error if body is incorrect`,
    },
    deleteContacts: {
      description: "Deletes contacts",
      method: "DELETE",
      queryParams: "id | telephoneNum",
      returns: `Returns the deleted contact`,
    },
  });
});

infoRest.get("/category", (req, res, next) => {
  res.json({
    getCategories: {
      description: "Returns a category or a list of categories",
      method: "GET",
      queryParams: "id | name & includeContacts?",
      returns: `If no query is provided, will return all categories.
                If id or name is passed, returns a category object with that id or name, returns an error if no category is found.
                If includeContacts is set to true, the response will include the contacts for each category`,
    },
    addCategories: {
      description: "Adds a category and return the added category",
      method: "POST",
      body: {
        name: "The category name, string",
      },
      returns: `Returns the added category or an error if body is incorrect`,
    },
    deleteCategories: {
      description: "Deletes categories",
      method: "DELETE",
      queryParams: "id | name",
      returns: `Returns the deleted category`,
    },
  });
});

export default infoRest;
