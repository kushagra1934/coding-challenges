let fs = require("fs").promises;

let args = process.argv[2];
let filename= process.argv[3];


console.log(args);

if (args === "-c") {
  countBytes();
} else if (args === "-l") {
  countLines();
} else if (args === "-w") {
  countWords();
} else if (args === "-m") {
  countCharacters();
} else {
    countLines();
    countWords();
  countBytes();
  
  
}

async function countBytes() {
  try {
    let data = await fs.stat("test.txt");
    console.log(data.size);

  } catch (error) {
    console.log(error);
  }
}

async function countLines(){
    try {
        let data = await fs.readFile("test.txt","utf-8");
        let lines = data.split("\n");
        console.log(lines.length);
    } catch (error) {
        console.log(error)
    }
}


async function countWords(){
    try {
        let data = await fs.readFile("test.txt","utf-8");
        let words= data.split(/\s+/);
        console.log(words.length);
    } catch (error) {
        console.log(error);
    }
}


async function countCharacters(){
    try {
        let data = await fs.readFile("test.txt", "utf-8");
        let chars = data.split('');
        console.log(chars.length);
    } catch (error) {
        console.log(error)
    }
}