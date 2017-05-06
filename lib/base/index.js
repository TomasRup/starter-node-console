module.exports = class Base {

    constructor() {
    }

    getStatus() {
        return Promise
            .delay(2000)
            .then(() => "123");
    }
}