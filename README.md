# Atlavik hotels API

* Node version 'v13.8.0'

# Travis Build Badge

[![Build Status](https://travis-ci.com/Qubaish/atlavik-app.svg?branch=master)](https://travis-ci.com/Qubaish/atlavik-app)

# Codeclimate

* Maintainability Badge
[![Maintainability](https://api.codeclimate.com/v1/badges/8a46eb43d9286380eb2f/maintainability)](https://codeclimate.com/github/Qubaish/atlavik-app/maintainability)

* Test Coverage
[![Test Coverage](https://api.codeclimate.com/v1/badges/8a46eb43d9286380eb2f/test_coverage)](https://codeclimate.com/github/Qubaish/atlavik-app/test_coverage)

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


