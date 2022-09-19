# PhonebookBackend

## A small lightweight backend for a simple phonebook.
### Uses Typescript, Node.js, Express.js, Prisma and SQLight.


*Made for educational purposes.*

### Prerequisites
• Node^16

### To start
Firstly clone this repository.

Then to install the packages needed run:
```
  npm install
```

### To use
• To start the server run:
```
  npm start
```

• To start the server in dev mode run:
```
  npm run dev
```
*This will use nodemon to enable fast reload*

• To access db direclty via GUI the project uses Prisma Studio, start the service by running:
```
  npx prisma studio
```

### To edit the database schema
Since the project uses Prisma, to edit tables or relations between them you have to edit the file `prisma/schema.prisma`, for documentation you can check out the [Prisma documentation](https://www.prisma.io/docs/getting-started)

After that you have to run the following command to reflect your changes on the database:
```
npx prisma migrate dev --name init
```
