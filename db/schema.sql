CREATE DATABASE burgers_db;

CREATE TABLE burger
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(50) NOT NULL,
devoured BOOLEAN,
date TIME,
PRIMARY KEY (id)
);