const Icrud = require('./interfaces/icrud');

class Postgres extends Icrud {
    constructor(){
        super();
    }

    create(item){
        console.log("Here you can use your Postgres database");
    }
}

module.exports = Postgres