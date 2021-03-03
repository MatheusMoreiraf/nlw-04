<h1>NLW#04 - Node.js</h1>

NPS-NLW is an application that consists of calculating the company's NPS. In it we make the registration of users,
registration of surveys, sending e-mail for users to answer the satisfaction surveys and with this we can perform the
calculation of the NPS.

This project was developed during the NodeJS trail, in the fourth edition of NLW. We learned concepts about what an API
is, how to start a project using Typescript and Express for route management, TypeORM for data manipulation, automated
tests and sending e-mail.

## Technology

- [TypeScript](https://www.typescriptlang.org/)
- [Ethereal-Email](https://ethereal.email/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)

## Using

- Install dependencies: `yarn install`
- Runs the project in development mode: `yarn dev`
- Creating migrations: `yarn typeorm migration:create -n <Name>`
- Execution of migrations: `yarn typeorm migration:run`
- Reverse the latest migrations: `yarn typeorm migration:revert`

Application can be accessed at:
(localhost:3333)[localhost:3333]

