const { Console } = require('console');
const os = require('os');





function foo(){
    // do stuff
    var totalMem = os.totalmem();
    var freeMem = os.freemem();
    var percentageFreeMem = 100 *(1.00 - (freeMem / totalMem));
    console.log(`${freeMem} free of a total of ${totalMem}, a memroy consumption of ${percentageFreeMem} %`);

    setTimeout(foo, 3000 );
}

foo();