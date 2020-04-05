# Atlavik hotels API

* Node version 'v13.8.0'

# Setting up the app in *development* mode

In the root of the app:
* npm install
* npm run watch:dev

# For Test Cases

* npm test

# API Documentation

* apidoc -i doc/api -o doc/apiDoc/
* http://localhost:5000/api-doc

# Hotels API

* GET /api/v1/hotels

# For Filtering

* GET /api/v1/hotels?name=
* GET /api/v1/hotels?price=
* GET /api/v1/hotels?city=
* GET /api/v1/hotels?date=

# For Sorting

* GET /api/v1/hotels?sort=name
* GET /api/v1/hotels?sort=price

Travis Build Badge

[![Build Status](https://travis-ci.com/Qubaish/atlavik-app.svg?branch=master)](https://travis-ci.com/Qubaish/atlavik-app)

