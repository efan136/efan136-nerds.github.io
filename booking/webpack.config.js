const path = require("path");

module.exports = {
  entry: [
    "./js/util.js",
    "./js/form.js",
    "./js/upload.js",
    "./js/load-data.js",
    "./js/pins.js",
    "./js/filter.js",
    "./js/debounce.js",
    "./js/pinCard.js",
    "./js/map.js",
    "./js/main.js",
    "./js/moveMainPin.js",
    "./js/showPreviewPhotos.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
