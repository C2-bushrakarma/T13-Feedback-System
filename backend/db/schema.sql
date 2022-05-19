CREATE TABLE admin (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    PRIMARY KEY (id)
);
CREATE TABLE user (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    PRIMARY KEY (id)
);