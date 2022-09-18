import { Contact, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createContact = (contact: Contact) => {
  return prisma.contact.create({
    data: contact,
  });
};

const retrieveContactById = (contactId: number, includeCategory = false) => {
  return prisma.contact.findFirstOrThrow({
    where: {
      id: contactId,
    },
    include: {
      category: includeCategory,
    },
  });
};

const retrieveContactByPhone = (
  phoneNumber: string,
  includeCategory = false
) => {
  return prisma.contact.findFirstOrThrow({
    where: {
      telephoneNum: phoneNumber,
    },
    include: {
      category: includeCategory,
    },
  });
};

const retrieveContactsByName = (
  contactName: string,
  includeCategory = false
) => {
  return prisma.contact.findMany({
    where: {
      name: contactName,
    },
    include: {
      category: includeCategory,
    },
  });
};

const retrieveAllContacts = (includeCategory = false) => {
  return prisma.contact.findMany({
    include: {
      category: includeCategory,
    },
  });
};

const deleteContactById = (contanctId: number) => {
  return prisma.contact.delete({
    where: {
      id: contanctId,
    },
  });
};

const deleteContactByPhone = (phoneNumber: string) => {
  return prisma.contact.delete({
    where: {
      telephoneNum: phoneNumber,
    },
  });
};

const deleteAllContacts = () => {
  return prisma.contact.deleteMany();
};

export {
  createContact,
  retrieveContactById,
  retrieveContactByPhone,
  retrieveContactsByName,
  retrieveAllContacts,
  deleteContactById,
  deleteContactByPhone,
  deleteAllContacts,
};
