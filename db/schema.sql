DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE Burgers (
    id INT NOT NULL Auto_Increment,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN NOT NULL
)
