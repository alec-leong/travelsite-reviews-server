===== 1. Seeding Instructions =====

=========== Terminal  1 ===========
$ npm run seed

=========== Terminal  2 ===========

$ mongo

> show dbs
> use tripAdvisor
> show collections
> db.listings.count()
> db.listings.findOne()

*** Copy the SHA from `db.listings.findOne()` ****

======= 2. API Instructions =======

=========== Terminal  3 ===========
$ npm start

=========== Terminal  4 ===========
$ node ./client/index.js PAST-SHA-HERE-NO-QUOTES-NEEDED
