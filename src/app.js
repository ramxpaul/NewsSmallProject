//regular modules
const request = require("request");

//Declaring Express
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const myPath = require("path");
const hbs = require("hbs");

//declare news read
const news = require("./news");
const { response } = require("express");
const { title } = require("process");
const { name } = require("ci-info");

app.set("view engine", "hbs");

// To change Views Directory to Any Path
const viewPath = myPath.join(__dirname, "../templates/views");
app.set("views", viewPath);

//The Path For Header And Footer (In Folder Called Partials)
const partialPath = myPath.join(__dirname, "../templates/partials");
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    const url =
        "https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=e8e6ecb4896a41428d78a3147e4751df";
    request({ url, json: true }, (error, response) => {
        if (error) {
            return console.log('error')
        }
        res.render("index", {
            data: response.body.articles,
        });
    });
});

// news('name', (error, response) => {
//     console.log(response)
//     app.get("/", (req, res) => {
//         res.render("index", {
//                     data: response
//                 }

//             )
//             console.log(data)
//         console.log('msg')
//     })

// })

app.listen(port, () => {
    console.log("Loading Server Success");
});