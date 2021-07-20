
const fs=require('fs');

const chalk=require('chalk');

const loadNotes=()=>{
    try {
        const bufferData=fs.readFileSync('Note-json.json');
        const data=bufferData.toString();
        return JSON.parse(data);
    } catch(e) {
        return [];
    }

};

const saveNotes=(getlist)=>{
    const JsonData=JSON.stringify(getlist);
    fs.writeFileSync('Note-json.json',JsonData);
};

//Add a note :::

const addNote=(title,body)=>{

    const getList=loadNotes();

    const duplicateNote=getList.find((note)=>title===note.title);

    if(duplicateNote)
    {
        console.log(chalk.inverse.red('Title of Note is already taken!!'));
    }
    else{
        getList.push(
            {
             title:title,
             body:body,   
            },
        )
       
        console.log(chalk.inverse.greenBright('Add a new note!!'));
    }
    saveNotes(getList);
    

};

//Remove a Note:::::::

const removeNote=(title)=>{
    const getList=loadNotes();
    const getAnotherNote=getList.filter((note)=>note.title!==title);
    if(getList.length > getAnotherNote.length)
    {
        console.log(chalk.greenBright.inverse('Note Removed!!'));
    }
    else{
        console.log(chalk.red.inverse('Note Does not exist!'));

    }
    saveNotes(getAnotherNote);

};

//Read a note:::

const readNote=(title)=>{
    const getNote=loadNotes();
    const getData=getNote.find((note)=>title===note.title);
    if(getData)
    {
        console.log(`Title is : ${chalk.inverse.grey(getData.title)} and Body is: ${chalk.inverse.red(getData.body)};`);
    }
    else{
        console.log(chalk.inverse.greenBright('Note does not exist!!'));
    }

};

// List a note:

const listNote=()=>{
  const getNote=loadNotes();
  for(const note of getNote)
  console.log(`Title is : ${chalk.inverse.grey(note.title)} and Body is: ${chalk.inverse.red(note.body)};`);
};

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    readNote:readNote,
    listNote:listNote,
}