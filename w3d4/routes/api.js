const express = require("express");
const apiRoutes = express.Router();

const old_listOfPosts = {
  post1: { id: 1, title: "I AM POST", content: "lorem ipsum si dolor amet..." },
  post2: { id: 1, title: "I AM POST", content: "lorem ipsum si dolor amet..." },
  post3: { id: 1, title: "I AM POST", content: "lorem ipsum si dolor amet..." },
  post4: { id: 1, title: "I AM POST", content: "lorem ipsum si dolor amet..." }
};
const listOfPosts = [
  { id: 1, title: "I AM POST", content: "lorem ipsum si dolor amet..." },
  { id: 2, title: "I AM POST", content: "lorem ipsum si dolor amet..." },
  { id: 3, title: "I AM POST", content: "lorem ipsum si dolor amet..." },
  { id: 4, title: "I AM POST", content: "lorem ipsum si dolor amet..." }
];

// {
//   shorturl:"longurl"
// }
// {
//   shorturl:{
//     id:shorturl,
//     longurl:"....."
//   }
// }
const old_getPosts = (list, id) => {
  if (id) {
    return list[id];
  } else {
    return list;
  }
};

const getPosts = (list, id) => {
  if (id) {
    return list.filter(post => post.id === id)[0];
  } else {
    return list;
  }
};

apiRoutes.get("/", (req, res) => {
  res.render("apiReadme");
});

apiRoutes.get("/posts", (req, res) => {
  res.json(getPosts(listOfPosts));
});
apiRoutes.get("/posts/:post_id", (req, res) => {
  res.json(getPosts(listOfPosts, req.params.post_id));
});

apiRoutes.post("/posts/:post_id/delete", (req, res) => {
  res.json(getPosts(listOfPosts));
});

apiRoutes.delete("/posts/:post_id", (req, res) => {
  // delete something
});
module.exports = apiRoutes;
