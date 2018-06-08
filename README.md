# Salient Alert
### By Stephanie Cueto
Application that helps you and your loved ones from being targeted unfairly from deportation and avoid ICE Raids.

Signal is a online community space for people to report ICE Raids or Checkpoints that are happening. You will be able to see them and reported online via web app.

***Tech Stack***: React, Express, MongoDB, Node, Yarn, and Brew
* This project Builds of the Guidelines of ***Techtonica's Final Project***
[https://github.com/Techtonica/curriculum/blob/master/projects/final-project/final-project.md](https://github.com/Techtonica/curriculum/blob/master/projects/final-project/final-project.md)
* This project was bootstrapped with **Create React** App[https://github.com/facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)
---
## **Step By Step to get Started**
* Fork repo and `git clone` url into your local desktop
* Run `yarn install` to get your yarn modules


### A. Backend Data Base
1. Download _*Mongo DB*_ [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)
2. Start your back end server run `mongod` by running the shell command on seperate tab from your bash to navigate.
3. Get your back end server to listen by running `node server/server`
4. See what is on your mongo database by running `mongo` on a seperate tab
5. Do command `show dbs` to show collections
6. `use salientalert` to use collection Salient alert
7. Insert data to make sure it is working
8. Back in the Mongo tab, do `db.checkpoints.find().pretty()` or `db.iceraids.find().pretty()` to see your data.


### B. Frontend Application
1. In a seperate shell tab run `yarn start` to get react front end running on port 3000.


## Current Feature list
#### Frontend
* Buttons - deleting and edit
* Sub MissionForm
* Two Table of Data

#### Backend
* Running Express Server
* Data Displayed and being sent to MongoDB backend database

## Later Features List
* Voting up and down feature for data submitted
* Pins on Map Feature will be display with dummy data input