DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    uid                 INT AUTO_INCREMENT,
    admin               INT,
    name                VARCHAR(40),
    username            VARCHAR(40),
    password            VARCHAR(40),
    email               VARCHAR(40),
    address             VARCHAR(40),
    phone               VARCHAR(40),
    enabled             INT,
    PRIMARY KEY (uid)
);

CREATE TABLE post (
    pid                 INT AUTO_INCREMENT,
    uid                 INT,
    title               VARCHAR(40),
    text                VARCHAR(40),
    media               LONGBLOB,
    likes               INT,
    upvotes             INT,
    downvotes           INT,
    category            VARCHAR(40),
    PRIMARY KEY (pid)
);

CREATE TABLE comments (
    cid                 INT AUTO_INCREMENT,
    uid                 INT,
    pid                 INT,
    text                VARCHAR(500),
    likes               INT,
    upvotes             INT,
    downvotes           INT,
    replyId             INT,    
    PRIMARY KEY (cid),
    FOREIGN KEY (uid) REFERENCES users (uid),
    FOREIGN KEY (pid) REFERENCES post (pid),
    FOREIGN KEY (replyId) REFERENCES comments (cid)
);
INSERT INTO users (name, password, enabled) VALUES ('Joe', 'pword', 1);
