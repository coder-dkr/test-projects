const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); 
const app = express();

app.use(cors()); 
app.use(express.static('public'));
app.use(express.json());

const blogsFilePath = path.join(__dirname, 'blogs.json');

app.post('/post-blog', (req, res) => {
  const newBlog = req.body;

  fs.readFile(blogsFilePath, (err, data) => {
    let blogs = [];
    if (!err && data.length > 0) {
      blogs = JSON.parse(data);
    }

    blogs.push(newBlog);

    fs.writeFile(blogsFilePath, JSON.stringify(blogs, null, 2), (err) => {
      if (err) return res.status(500).send('Error writing blogs file');
      res.status(200).send('Blog posted successfully');
    });
  });
});

app.get('/get-blogs', (req, res) => {
  fs.readFile(blogsFilePath, (err, data) => {
    if (err) return res.status(500).send('Error reading blogs file');

    if (data.length === 0) {
      return res.status(200).json([]); 
    }

    const blogs = JSON.parse(data);
    res.json(blogs);
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
