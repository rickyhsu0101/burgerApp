DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;
USE df70hz67223y74rf;
CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

