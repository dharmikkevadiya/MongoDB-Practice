/* Baisc Commands */
//> db
//> mongod
//> mongoshow dropDatabaseuse dbhelp
//> show Collection / show tables
//> help
//> db.createCollection('tbl_posts');
//> db.dropDatabase();
//> db.tbl_posts.drop()


////////////////////// CREATE DOCUMENT ///////////////////////

//syntax: 
insert(data) 
insertMany([{}, {}, {}])

db.tbl_posts.insert({
    title: 'post One',
    body: 'body of post two',
    category: 'news',
    tags: ['news','events'],
    user: {
        name: 'john Doe',
        status: 'author' 
    },
    year: 1995,
    date: Date()
});

db.tbl_posts.insert({
    title: 'post two',
    body: 'body of post two',
    category: 'comedy',
    year: 1998
});

//or
db.tbl_posts.insertMany([
    {
        title: 'post three',
        body: 'body of post three',
        category: 'lofi',
        year: 2015 
    },
    {
        title: 'post four',
        body: 'body of post four',
        category: 'news',
        year: 2021 
    }
]);


////////////////////// READ DOCUMENT ///////////////////////

//syntax:-
db.tbl_posts.findOne();
db.tbl_posts.find();
db.tbl_posts.find().pretty();

db.tbl_posts.find({category: 'Lofi'}).pretty();
db.tbl_posts.find({title: 'Post three',categoty: 'Lofi'}).pretty();

//Comparision : Query Selectors
db.tbl_posts.find({year: {$gt: 2000}});
db.tbl_posts.find({year: {$lt: 2000}});
db.tbl_posts.find({year: {$lte: 2000}});
db.tbl_posts.find({year: {$gte: 2000}});
db.tbl_posts.find({year: {$ne: 2000}});
db.tbl_posts.find({year: {$eq: 2000}});
db.tbl_posts.find({year: {$in: [2021,1998]}});
db.tbl_posts.find({year: {$nin: [2021,1998]}});


//logical: query Selectors
db.tbl_posts.find({year: {$not: {$eq: 1995}}}).pretty();
db.tbl_posts.find({$or: [{year: 2021},{year: 2015}]}).pretty();
db.tbl_posts.find({$and: [{year: 2021},{year: 2015}]}).pretty();
db.tbl_posts.find({$nor: [{year: 2021},{year: 2015}]}).pretty();

db.tbl_posts.find({
    $and: [
    {$or: [{category: {$eq: 'lofi'}},{category: {$eq: 'memecry'}}]},
    {$or: [{year: {$gt: 2000}},{title: {$eq: 'post one'} }]}
    ]
}).pretty();

//Element: Query selectors
db.tbl_posts.find({category: {$exists: true}}).pretty();
db.tbl_posts.find({category: {$type: "string"}}).pretty();

//sort,skip,limit
db.tbl_posts.find().sort({year: -1});
db.tbl_posts.find().skip(2);
db.tbl_posts.find().limit(1);
db.tbl_posts.find().count();

////////////////////// UPDATE DOCUMENT ///////////////////////


db.tbl_posts.update({title: "post two"},{"Rno": 101,"year": 2016});  
db.tbl_posts.update({title: {$exists: true}},{"Rno": 101,"year": 2016});

db.tbl_posts.update({year: 2021},{$set: {categoty: "news1",body: "body of post 4"}});
db.tbl_posts.update({year: 2021},{$inc: {temp: 101}});
db.tbl_posts.update({year: 2021},{$rename: {"categoty":"category"}});

db.tbl_posts.update({year:1995},{$unset:{year:1}});


////////////////////// DELETE DOCUMENT ///////////////////////

db.tbl_posts.remove({year: 2016});
db.tbl_posts.remove({_id: 101},{justone: true});
db.tbl_posts.remove({}); //warning ! delte all the docs
db.tbl_posts.deleteOne({year: 2015});  

