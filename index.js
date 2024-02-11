import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs' 

inquirer
  .prompt([
   {
    message:"Type in your URL:",
    name: "url"
   }
  ])
  .then((answers) => {
    const url=answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
   console.log(error);
  });
  