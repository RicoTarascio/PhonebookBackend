import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCategory = async (category: Category) => {
  return prisma.category.create({
    data: category,
  });
};

const retrieveCategoryById = async (
  categoryId: number,
  includeContacts = false
) => {
  return prisma.category.findFirstOrThrow({
    where: {
      id: categoryId,
    },
    include: {
      contacts: includeContacts,
    },
  });
};

const retrieveCategoryByName = async (
  categoryName: string,
  includeContacts = false
) => {
  return prisma.category.findMany({
    where: {
      name: categoryName,
    },
    include: {
      contacts: includeContacts,
    },
  });
};

const retrieveAllCategories = async (includeContacts = false) => {
  return prisma.category.findMany({
    include: {
      contacts: includeContacts,
    },
  });
};

const deleteCategoryById = async (categoryId: number) => {
  return prisma.category.delete({
    where: {
      id: categoryId,
    },
  });
};

const deleteCategoryByName = async (categoryName: string) => {
  return prisma.category.delete({
    where: {
      name: categoryName,
    },
  });
};

const deleteAllCategories = async () => {
  return prisma.category.deleteMany();
};

export {
  createCategory,
  retrieveCategoryById,
  retrieveCategoryByName,
  retrieveAllCategories,
  deleteCategoryById,
  deleteCategoryByName,
  deleteAllCategories,
};
