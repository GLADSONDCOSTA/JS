var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});
con.connect(function(err){
    if (err) throw err;
    console.log("connected");
});

var sql = "create database if not exists mydb";
con.query(sql,function(err,res){
    if (err) throw err;
    console.log("Database created");
});

var sql = "create table if not exists mydb.book(Bid varchar(10),Bname varchar(20),Bprice varchar(20))";
con.query(sql,function(err,res){
    if (err) throw err;
    console.log("Table created");
});

var sql = "insert into mydb.book values('1001','Bio','300')";
con.query(sql,function(err,res){
    if (err) throw err;
    console.log("Single data Inserted");
});

var sql = "insert into mydb.book values ?";
var values = [ ['1002','Phy','500'],
                ['1003','Chem','600'],
                ['1004','CS','400']
];
con.query(sql,[values],function(err,res){
    if (err) throw err;
    console.log("Multiple data Inserted");
});

var sql = "delete from mydb.book where Bid='1003'";
con.query(sql,function(err,res){
    if (err) throw err;
    console.log("Deleted");
});

var sql = "update mydb.book set Bname='DBMS'where Bid='1004'";
con.query(sql,function(err,res){
    if (err) throw err;
    console.log("Updated");
});

var sql = "select * from mydb.book";
con.query(sql,function(err,res){
    if (err) throw err;
    console.log(res);
});
