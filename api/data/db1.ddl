DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS comments;

CREATE TABLE users (
    uid                 INT IDENTITY,
    admin               INT,
    username            VARCHAR(40),
    password            VARCHAR(40),
    email               VARCHAR(40),
    address             VARCHAR(40),
    phone               VARCHAR(40)
);

CREATE TABLE post (
    pid                 INT IDENTITY,
    uid                 INT,
    title               VARCHAR(40),
    text                VARCHAR(40),
    media               VARBINARY(MAX),
    likes               INT,
    upvotes             INT,
    downvotes           INT,
    PRIMARY KEY (pid)
);

CREATE TABLE comments (
    cid                 INT IDENTITY,
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

