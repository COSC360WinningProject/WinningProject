var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    const posts = [
        {
            "title": "Post 1",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed turpis efficitur, porttitor risus et, pulvinar ante. Proin porta nulla eu velit sodales dictum. Nam felis justo, rutrum a condimentum nec, tincidunt nec velit. Maecenas suscipit elit vitae enim scelerisque dictum. Ut dignissim purus gravida quam mollis tristique. Pellentesque dignissim sapien ipsum, at luctus libero aliquet sed. Duis est dui, suscipit ac posuere eu, sagittis vitae dui. Phasellus dictum dolor ultrices risus mattis tincidunt."
        },
        {
            "title": "Post 2",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed turpis efficitur, porttitor risus et, pulvinar ante. Proin porta nulla eu velit sodales dictum. Nam felis justo, rutrum a condimentum nec, tincidunt nec velit. Maecenas suscipit elit vitae enim scelerisque dictum. Ut dignissim purus gravida quam mollis tristique. Pellentesque dignissim sapien ipsum, at luctus libero aliquet sed. Duis est dui, suscipit ac posuere eu, sagittis vitae dui. Phasellus dictum dolor ultrices risus mattis tincidunt."
        },
        {
            "title": "Post 3",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed turpis efficitur, porttitor risus et, pulvinar ante. Proin porta nulla eu velit sodales dictum. Nam felis justo, rutrum a condimentum nec, tincidunt nec velit. Maecenas suscipit elit vitae enim scelerisque dictum. Ut dignissim purus gravida quam mollis tristique. Pellentesque dignissim sapien ipsum, at luctus libero aliquet sed. Duis est dui, suscipit ac posuere eu, sagittis vitae dui. Phasellus dictum dolor ultrices risus mattis tincidunt."
        }
    ];
    res.json(posts);
});

module.exports = router;