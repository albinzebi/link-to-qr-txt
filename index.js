// import packages
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    // creating object to get a link from the user
    {
        name: "link",
        message: "Write a link: "
    }
]).then((answer) => {

    // passing the link we got from the user and creating qr code image
    const qr_img = qr.image(answer.link);
    qr_img.pipe(fs.createWriteStream("image.png"));
    
    // write txt file with link inside
    fs.writeFile('link.txt', answer.link, 'utf8', (err) => {
        if (err) throw err;
        console.log("The link has been saved in a txt file.");
    });
});




