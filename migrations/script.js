import { connect } from "net";

db = connect('127.0.0.1:27017/salientalert')

fucntion insertData(myObject){
    db.servers.insert(myObject); 
}