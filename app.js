global.Promise = require('bluebird');

const readline = require('readline');
const _ = require('lodash');

const Base = require('./lib/base');
const base = new Base();


const interface = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout
});

function infinitelyRequestInput() {
    interface.question("How is it going?\n", reply => {
        const action = _.first(_.words(reply))
        
        switch (action) {
            case "status":
                base
                    .getStatus()
                    .then(status => console.log(status))
                    .then(() => infinitelyRequestInput());
                break;

            case "exit":
                interface.close();
                process.exit();
        }
    });
}

infinitelyRequestInput();