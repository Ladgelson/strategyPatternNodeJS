const Icrud = require('./interfaces/icrud');

class SqlServerDb extends Icrud {
    constructor(){
        super();
    }

    create(item){
        console.log("Here you can use your SqlServer database");
    }
}

module.exports = SqlServerDb