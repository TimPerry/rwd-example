# Responsive web design example

## Install

Clone this repo `git clone https://github.com/TimPerry/rwd-example`, change into that directory `cd rwd-example` and then run `npm install`.

## Usage

Run `npm start` and open up `http://localhost:8080/`.

# About #

This project uses gulp to serve a static webpage. The styles are done with SCSS. The default gulp task grabs the html and sass from the src folder and produces a build into the dist folder. Then dist folder is then served using the gulp connect plugin, which we also use to do livereload. In the SCSS there are various examples of flexbox, we then use the autoprefixer to make sure this works for the last two versions of the popular browsers.
