var db = require('./db');

var dbHandler = {
    insert: function (firstName, lastName) {
        db
            .insert([{name: firstName, surname: lastName}])
            .into('blog_dev')
            .catch(err => console.log(err)
        )
    },
    retrive: function () {
        return db.select('*').from('blog_dev')
    }
}

module.exports = dbHandler;
