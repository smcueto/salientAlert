# Salient Alert
### By Stephanie Cueto

Salient Alert is a online community space for people to report ICE Raids or Checkpoints that are happening. It is an application that helps you and your loved ones from being targeted unfairly from deportation and avoid ICE Raids. You will be able to see them and reported online via web app.

***Tech Stack***: React, Express, MongoDB, Node, Yarn, and Brew
* This project Builds of the Guidelines of ***Techtonica's Final Project***
[https://github.com/Techtonica/curriculum/blob/master/projects/final-project/final-project.md](https://github.com/Techtonica/curriculum/blob/master/projects/final-project/final-project.md)
* This project was bootstrapped with **Create React** App[https://github.com/facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)
---
## **Step By Step to get Started**
### Before starting your backend...
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
2. Add access token to your keys.js file


## Current Feature list
#### Frontend
* Buttons - deleting and edit.
* Submission forms for Ice Raids and Check Points.
* Two tables of data.
* Rending address on map in a marker form.

#### Backend
* Running Express Server
* Data Displayed and being sent to MongoDB backend database

![datamodel](https://github.com/smcueto/salientAlert/blob/master/public/SalientAlertDataModel.png?raw=true)
## Later Features List
* Voting up and down feature for reports that are submitted
* Data validation
* OAuth for Admin User to take off spam data
* Google Translate
* BONUS: suggested routes to avoid Ice Raids and Check Points.
