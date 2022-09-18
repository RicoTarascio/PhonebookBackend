-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telephoneNum" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "categoryId" INTEGER,
    CONSTRAINT "Contact_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Contact" ("categoryId", "id", "name", "surname", "telephoneNum") SELECT "categoryId", "id", "name", "surname", "telephoneNum" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
CREATE UNIQUE INDEX "Contact_telephoneNum_key" ON "Contact"("telephoneNum");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
