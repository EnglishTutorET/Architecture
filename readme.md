clone the repo:

    $ git clone https://github.com/EnglishTutorET/Architecture.git
    
Install dependency:

    $ npm install
    
Install knex:

    $ npm install knex -g
 
create db:

    $ createdb blog_dev
    
run migration:
    
    $ knex migrate:latest
    
start server:

    $ node server/index.js
    
