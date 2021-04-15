DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    uid                 INT AUTO_INCREMENT,
    admin               INT,
    firstname           VARCHAR(40),
    lastname            VARCHAR(40),
    username            VARCHAR(40) UNIQUE,
    password            VARCHAR(40),
    email               VARCHAR(40),
    address             VARCHAR(40),
    phone               VARCHAR(40),
    profileImageURL     VARCHAR(100),
    profileImage        LONGBLOB,
    enabled             INT,
    PRIMARY KEY (uid)
);

CREATE TABLE posts (
    pid                 INT AUTO_INCREMENT,
    uid                 INT,
    title               VARCHAR(40),
    text                VARCHAR(40),
    media               LONGBLOB,
    likes               INT,
    category            VARCHAR(40),
    PRIMARY KEY (pid)
);

CREATE TABLE comments (
    cid                 INT AUTO_INCREMENT,
    uid                 INT,
    pid                 INT,
    text                VARCHAR(500),
    likes               INT,
    replyId             INT,    
    PRIMARY KEY (cid),
    FOREIGN KEY (uid) REFERENCES users (uid),
    FOREIGN KEY (pid) REFERENCES posts (pid),
    FOREIGN KEY (replyId) REFERENCES comments (cid)
);

INSERT INTO users (admin, firstname, lastname, username, password, email, address, phone, enabled) VALUES (1, 'Joe', 'Ippo', 'ashitaNoJoe', 'pword', 'joe@ashita.com', '1212 tomorrow lane', '111-222-3333',  1);

INSERT INTO users (admin,firstname,lastname, username, password, email, address, phone, enabled) VALUES(1, 'user1', 'u1last', 'u1', 'password', 'abc1@example.com', '1234 road street', '555-555-5555', 1);
INSERT INTO users (admin,firstname,lastname, username, password, email, address, phone, enabled) VALUES(0, 'user2', 'u2last', 'u2', 'password', 'abc2@example.com', '6789 road street', '444-444-4444', 1);
INSERT INTO users (admin,firstname,lastname, username, password, email, address, phone, enabled) VALUES(0, 'user3', 'u3last', 'u3', 'password', 'abc3@example.com', '4567 road street', '666-666-6666', 1);
INSERT INTO posts (uid, title, text, likes) VALUES(1, 'Post 1', 'About 1', 100);
INSERT INTO posts (uid, title, text, likes) VALUES(1, 'Post 2', 'About 2', 89);
INSERT INTO posts (uid, title, text, likes) VALUES(3, 'Post 3', 'About 3', 10);
INSERT INTO comments (uid, pid, text, likes) VALUES(2, 1, 'very funny', 4);
INSERT INTO comments (uid, pid, text, likes) VALUES(2, 1, 'could be better tho', 3);
INSERT INTO comments (uid, pid, text, likes) VALUES(2, 2, 'sick', 5);
INSERT INTO comments (uid, pid, text, likes) VALUES(2, 3, 'bs', 9);


