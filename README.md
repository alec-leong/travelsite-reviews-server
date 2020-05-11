======= 1. Seeding Instructions =======

============= Terminal  1 =============
$ npm run seed

============= Terminal  2 =============

$ mongo

> show dbs
> use tripAdvisor
> show collections
> db.listings.count()
> db.listings.findOne({}, { "_id": 1 })





========= 2. API Instructions =========

============= Terminal  3 =============
$ npm start

============= Terminal  4 =============
$ npm run api





========= 3. Test Instruction =========

============= Terminal  5 =============
$ npm test


./node_modules/.bin/nightwatch node_modules/nightwatch/examples/tests/ecosia.js
