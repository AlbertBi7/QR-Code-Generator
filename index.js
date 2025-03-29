
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      name: 'url',
      message: 'Enter a URL',
    },
  ])
  .then((answers) => {
    const url=answers.url
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));
    
    fs.writeFile('qr-image.txt',url, (err)=>{
        if(err) throw err;
        console.log("File is created");
    });

  })
  .catch((error)=>{
    if(error.isTtyError){
        console.log("Terminal not supported");
    }else{
        console.log("somthing went wrong")
    }
  })
