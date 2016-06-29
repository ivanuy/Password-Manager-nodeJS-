var argv = require('yargs')
    .command('hello', 'Greets the user', function (yargs) {
            yargs.options({
                name: {
                    demand: true,
                    alias: 'n',
                    description: 'Your first name goes here',
                    type: 'string'
                },
                lastname: {
                    demand: true,
                    alias: 'l',
                    description: 'Your last name goes here',
                    type: 'string'
                }
            }).help('help');
    })
    .help('help')
    .argv;

console.log(argv);

if (argv._[0] === 'hello' && typeof argv.lastname !== 'undefined' && 
    typeof argv.name !== 'undefined') {
    console.log(argv._[0] + ' ' + argv.name + ' ' + argv.lastname);
} else if (argv._[0] === 'hello' && typeof argv.name !== 'undefined') {
    console.log('hello  ' + argv.name);
} else if (argv._[0] === 'hello' && typeof argv.lastname !== 'undefined') {
    console.log('hello ' + argv.lastname);
}else if ( argv._[0] === 'hello') {
    console.log('hello');
}

