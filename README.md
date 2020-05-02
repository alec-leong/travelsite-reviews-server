===== Seeding Instructions =====

========== Terminal 1 ==========
$ npm run seed

========== Terminal 2 ==========
$ mongo

> show dbs
> use tripAdvisor
> show collections
> db.listings.findOne().pretty()
> db.listings.count()



======= API Instructions =======

========== Terminal 1 ==========
$ npm start

========== Terminal 2 ==========
$ npm run client
