CREATE DATABASE UserDatabase;

USE UserDatabase;

CREATE TABLE Users(
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(100) UNIQUE NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL
);

INSERT INTO Users (Email, PasswordHash) VALUES
('user1@example.com', 'hashed_password_1')
('user2@example.com', 'hashed_password_2')
('user3@example.com', 'hashed_password_3');