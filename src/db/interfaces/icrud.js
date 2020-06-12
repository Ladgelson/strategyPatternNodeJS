class NotImplementedException extends Error {
    constructor(){
        super("Not implemented yet!");
    }
}

class Icrud {
    create(item) {
        throw new NotImplementedException()
    }

    read(query) {
        throw new NotImplementedException()
    }

    update(id, item) {
        throw new NotImplementedException()
    }

    delete(item) {
        throw new NotImplementedException()
    }
}

module.exports = Icrud