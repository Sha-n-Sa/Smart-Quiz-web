# SMART QUIZ 

## Overview

This app allows users to vote anonomously on polls, login using social credentials, create polls of their own
and manage their polls. The client leverages Chart.js, Angular v2.x and Typescript tied to a Firebase real-time 
authentication engine and datastore using [AngularFire2](https://github.com/angular/angularfire2).



User stories:

* As an authenticated user, I can keep my polls and come back later to access them.
* As an authenticated user, I can share my polls with my friends.
* As an authenticated user, I can see the aggregate results of my polls.
* As an authenticated user, I can delete polls that I decide I don't want anymore.
* As an authenticated user, I can create a poll with any number of possible items.
* As an unauthenticated or authenticated user, I can see and vote on everyone's polls.
* As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
* As an authenticated user, if I don't like the options on a poll, I can create a new option.

## Install

Clone this repository and install npm dependencies:

```
git clone git@github.com:cjsheets/smart_quiz_web.git
cd angular-smart_quiz_web
npm install
```

## Run

First, from the [firebase console](https://console.firebase.google.com/) create a new project. To setup authentication,
database rules or hosting, see the [offical docs](https://firebase.google.com/docs/).

For client development, use angular-cli to launch the app:

```
ng serve
```

Navigate to `http://localhost:4200`



## Technology Stack

This package contains:

| Front-End | Back-End |
| ------- | ------- |
| Angular v2.x | Firebase Auth |
| AngularFire2 | Firebase Database |
| Charts.js |  |
| HTML5/CSS |  |
| Webpack | |

| Both | 
| ------- |
| Typescript |



