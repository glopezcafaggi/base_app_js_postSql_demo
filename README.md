A basic get-post-update-delete node.js with express app with postgres SQL databases interactions.

A personal tutorial and  workflow.

Prerequisistes 
node.js installed
Postgres SQL pgadmin 4 or whatever.
postman account ???

steps:
create app.js main file
npm init
npm install dependecies: express nodemon, dotenv, sequelize, pg pg-hstore
npm install dev depencecis: npm install sequelize-auto -D  (D for dev :p)

modify json package file 

create .env file and add it git.ignore file

create config folder and database.js file

apply in terminal the ultimate sequelize-auto command

npx sequelize-auto -h localhost -d library -u postgres -x postgres -p 5432 --dialect postgres -c ./config/database.js -o ./models

and index.js to models file; ./models/indexs.js provides only two exports the sequelize object (who is initself imported from ;/config/database.js) and the model object to be used until the repositories

then and only we can start with the main fil app.js

after writting the bootsrap function
only then we can have a postman test "/" GET method.
