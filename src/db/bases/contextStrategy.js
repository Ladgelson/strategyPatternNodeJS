class ContextStrategy {
    constructor(strategy){
        this._database = strategy 
    }

    create(item) {
        return this._database.create(item);
    }

    read(query) {
        return this._database.read(query);
    }

    update(id, item) {
        return this._database.update(id,item);
    }

    delete(item) {
        return this._database.delete(item);
    }
}

module.exports = ContextStrategy