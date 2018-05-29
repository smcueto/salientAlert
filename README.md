# Salient Alert
### By Stephanie Cueto
Application that helps you and your loved ones from being targeted unfairly from deportation and avoid ICE Raids.

Signal is a online community space for people to report ICE Raids or Checkpoints that are happening. You will be able to see them and reported online via web app.

***Tech Stack***: React, Express, MongoDB, Node, Brew
* This project Builds of the Guidelines of ***Techtonica's Final Project***
[https://github.com/Techtonica/curriculum/blob/master/projects/final-project/final-project.md](https://github.com/Techtonica/curriculum/blob/master/projects/final-project/final-project.md)
* This project was bootstrapped with **Create React** App[https://github.com/facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)
---
## **Step By Step to get Started**
* Fork repo and `git clone` into your local desktop

### A. Backend Data Base
1. Download _*Sequel Pro*_ [http://www.sequelpro.com/](http://www.sequelpro.com/)
  * Optional - Download *MySQL WorkBench* [https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/)
2. If you have brew installed, install `brew install mysql`, then start with `brew services start mysql`
3. Create new connection in Sequel Pro with the following connection details and press connect
  * Name: **127.0.0.1**
  * Host: [your name, optional]
  * Username: **root**
  * Password: [your own password, optional]
  * Database: **signalProject**
  * Port: [leave blank, optional]
4. In your connection, create a table named **users**
5. In users table create the fields **name** and **email** with type **VARCHAR** and **length 100**
6. `cd` into *react-backend*
7. Run `npm install` to get node modules
8. Install `npm install nodemon  -g` in oder to run `nodemon` command
9. run `nodemon app.js` to get server started
10. Your server should start in Terminal and say *Server Started on Port 3001...*

### B. Frontend Application
1. In a seperate tab in your Terminal,`cd` into *react-frontend* directory
2. Run `npm install` then `yarn install`
3. Run `yarn start` to get react front end running.

## Current Feature list
#### Frontend
* Buttons
* Form

#### Backend
* Running Express Server
* Hard Coded Data Display and being sent to SQL Pro

## Later Features List
* Form Submission will send data to back extended
* Back end will render and display to front end
* Heat Map Feature will be display with dummy data input