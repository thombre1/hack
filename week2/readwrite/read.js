const fs = require ('fs').promises;

async function readFromFile(path){
    try{
        const content = await fs.readFile(path,'utf-8');
    // console.clear();
    console.log(content);
    }
    catch(e){

    }
}
readFromFile("something.txt");