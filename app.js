const express = require('express');
const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const port = 5000;
const host = 'localhost';

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
  })

  app.use("/", express.static(__dirname + "/"))

app.get("/api/2015-12-25", (req, res) => {
    const date = "Fri, 25 Dec 2015 00:00:00 GMT";
    const dateStr = new Date(date).toString();
    const d = new Date("2015-12-25");
    const unix = Math.floor(d.getTime() / 1000) ;
    console.log(dateStr, unix)
    res.json({
        unix: unix,
        utc: date
    })
})
app.get("api/1451001600000", (req, res) => {
    const date = 
    res.json({
        unix: 1451001600000,
        utc: date
    })
})

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
  })