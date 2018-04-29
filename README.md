<h1 align="center"> Doctor Lookup </h1>

<p align="center">An application to find the best doctor in target area</p><br>


## Setup/Installation Requirements

To clone and run this application, you'll need Git and Node, Npm installed on your computer. From your command line:

```
// Clone this repository
$ git clone https://github.com/epicodus-a/doctor-lookup.git

// Go into the repository
$ cd doctor-lookup

// Install dependencies
$ npm install

Get your api key at https://developer.betterdoctor.com and developers.google.com

// create file .env at projet root
$ touch .env

// add your key to .env as below format:
exports.apiKey=[Your api key]
exports.googleApiKey=[Your api key]


// Run the app
$ npm start
```

## Specifications

Behavior | Input | Output
------------ | ------------- | -------------
Takes in a issue and a specialty display matched doctors | "pain" | [{Name:Susan,Address:.1050 NW..Accepts new patients: Yes, Title: MD, Bio: Dr. Susan...},]
Takes in a location and issue and a specialty display matched doctors | "portland", "pain" | [{Name:Susan,Address:.1050 NW..Accepts new patients: Yes, Title:MD, Bio: Dr. Susan...},]
Takes in a name and issue and a specialty display matched doctors | "Adriana", "pain" | [{Name:Adriana,Address:250 King..Accepts new patients: Yes, Title: TO, Bio: Dr. Prawak is a physiatrist an..},]



## Known Bugs

- It won't show results till the second click of find doctor button

## Support and contact details

- @Adrianacmy


## Credits

This software uses code from several open source packages.

  - babel-core: "^6.26.0",
  - babel-loader: "^7.1.3",
  - babel-preset-es2015: "^6.24.1",
  - clean-webpack-plugin: "^0.1.18",
  - css-loader: "^0.28.10",
  - eslint: "^4.18.2",
  - eslint-loader: "^2.0.0",
  - html-webpack-plugin: "^3.0.6",
  - jasmine: "^3.1.0",
  - jasmine-core: "^2.99.1",
  - karma: "^2.0.0",
  - karma-chrome-launcher: "^2.2.0",
  - karma-cli: "^1.0.1",
  - karma-jasmine: "^1.1.1",
  - karma-jasmine-html-reporter: "^0.2.2",
  - karma-jquery: "^0.2.2",
  - karma-webpack: "^2.0.13",
  - style-loader: "^0.20.2",
  - uglifyjs-webpack-plugin: "^1.2.2",
  - webpack: "^4.0.1",
  - webpack-cli: "^2.0.9",
  - webpack-dev-server: "^3.1.0"
  - bootstrap: "^4.1.0",
  - jquery: "^3.3.1",
  - popper.js": "^1.14.3"

### License

- MIT

Copyright (c) 2018 Adriana

