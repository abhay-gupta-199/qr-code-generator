import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      name: "URL",
      message: "Type or paste your hyperlink: ",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream("qr-img.png"));
  })
  .catch((err) => {
    if (err.isTtyError) {
      console.log("Something went wrong!");
    }
  });
