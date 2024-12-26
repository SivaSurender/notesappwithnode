const path = require("path");
const express = require("express");
const { title } = require("process");
console.log(__dirname);
console.log(__filename);

const app = express();

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");
app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(express.static(publicPath));
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Bala",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Bala",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    message: "Contact Us",
  });
});
app.get("", (req, res) => {
  res.send("<h4>Hoooooiiiii</h4>");
});

app.get("/weather", (req, res) => {
  res.send({
    coord: {
      lon: 7.367,
      lat: 45.133,
    },
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    base: "stations",
    main: {
      temp: 284.2,
      feels_like: 282.93,
      temp_min: 283.06,
      temp_max: 286.82,
      pressure: 1021,
      humidity: 60,
      sea_level: 1021,
      grnd_level: 910,
    },
    visibility: 10000,
    wind: {
      speed: 4.09,
      deg: 121,
      gust: 3.47,
    },
    rain: {
      "1h": 2.73,
    },
    clouds: {
      all: 83,
    },
    dt: 1726660758,
    sys: {
      type: 1,
      id: 6736,
      country: "IT",
      sunrise: 1726636384,
      sunset: 1726680975,
    },
    timezone: 7200,
    id: 3165523,
    name: "Province of Turin",
    cod: 200,
  });
});

app.listen(3000, () => {
  console.log("Server is running");
});
