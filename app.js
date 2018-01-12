var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password:'root',
    database : 'madhan'
});

connection.connect(function(error){
    if(!!error){
        console.log('Mysql connection error');
    }
    else{
        console.log('Mysql connection success');
    }
});

app.get('/',function(req,res){
    console.log('App Running');

    connection.query('select * from Name',function(error,rows,fields){
        if(!!error){
            console.log('Query error');
        }
        else{
            console.log('Query success');
            console.log(rows);
            res.send(rows);
            
        }
    });
});

app.listen(1337,function(){
    console.log('Server running')
});
