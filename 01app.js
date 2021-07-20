//const { command, describe, require } = require('yargs');
const yargs=require('yargs');

const note=require('./02AddRemoveReadList');

//create-add-command::::

yargs.command({
    command:'add',
    describe:'Add Note',
    builder:{
        title:{
            title:'Note title',
            demandOption:'true',
            type:'string',
        },
        body:{
          body:'Note Body',
          demandOption:'true',
          type:'string',  
        },
       
    },
    handler(argv)
    {
        note.addNote(argv.title,argv.body);
    }

    
});

// create remove-command::::

yargs.command({
    command:'remove',
    describe:'Remove Note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:'true',
            type:'string',
        },
        body:{
            describe:'Note Body',
            type:'string',
        }
    },
    handler(argv)
    {
        note.removeNote(argv.title);
    }


});

//create read command:::

yargs.command({
    command:'read',
    describe:'Read a Note!!',
    builder:{
        title:{
            title:'Note title',
            demandOption:'true',
            type:'string',
        },
        body:{
            title:'Note body',
            type:'string', 
        },
    },
    handler(argv)
    {
        note.readNote(argv.title);
    }

});

// create list command::::::

yargs.command({
    command:'list',
    describe:'List Note',
    handler(){
        note.listNote();
    },

});
console.log(yargs.argv);
yargs.parse();