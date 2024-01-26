CREATE DATABASE library;

USE library;

-- USER TABLE

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL
);

ALTER TABLE users 
    ADD PRIMARY KEY (id);

ALTER TABLE users   
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

DESCRIBE users;

-- LINKS TABLE

CREATE TABLE books(
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    author VARCHAR(255) NOT NULL,
    total_pages INT(11),
    pages_read INT(11),
    user_id INT(11),
    rating INT(11),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE books
    ADD PRIMARY KEY (id);

ALTER TABLE books   
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

DESCRIBE books;
