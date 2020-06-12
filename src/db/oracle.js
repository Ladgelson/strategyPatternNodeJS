const Icrud = require('./interfaces/icrud');

class OracleDb extends Icrud {
    constructor(){
        super();
    }

    create(item){
        console.log("Here you can use your Oracle database");
    }
}

module.exports = OracleDb