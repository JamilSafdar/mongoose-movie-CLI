# Mongoose Movies CLI

Before you can use this app you will need to run "npm i"  on your machine and add a .env file with your own connection string from Mongo DB.
## Commands:

### List Movies
node src/app.js "list"

### Add Movies
node src/app.js "add" --title="**insert movie title here**" --actor="**insert actor here**"

### Delete Movies
node src/app.js "delete" --title="**insert movie title to be deleted here**"

### Update Movies
node src/app.js "update" --title="**insert movie title to be updated here**" --rating="**insert a number out of between 0 - 10 here**" --genre="**insert type of genre here**"
