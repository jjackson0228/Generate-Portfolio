const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = ({ name, location, github, linkedin, hobby, food }) =>
  `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Document</title>
</head>

<body>
    <header class="p-5 mb-4 header bg-light">
        <div class="container">
            <h1 class="display-4">Hi! My name is ${name}</h1>
            <p class="lead">I am from ${location}</p>
            <h3>Example Heading <span class="badge bg-secondary">Contact Me</span></h3>
            <ul class="list-group">
                <li class="list-group-item">My github username is ${github}</li>
                <li class="list-group-item">LinkedIn: ${linkedin}</li>
                <li class="list-group-item">My hobby is ${hobby}</li>
                <li class="list-group-item">My favorite food is ${food}</li>
            </ul>
        </div>
    </header>
</body>

</html>`;

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "name",
      name: "location",
      message: "Where are you from?",
    },
    {
      type: "input",
      name: "hobby",
      message: "What is your favorite hobby?",
    },
    {
      type: "input",
      name: "food",
      message: "What is your favorite food?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL.",
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
