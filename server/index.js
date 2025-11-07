const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: 'Krish Moond' },
  date: { type: String, required: true },
  readTime: { type: String, required: true },
  tags: [String],
  image: { type: String },
  likes: { type: Number, default: 0 },
  comments: [{
    text: String,
    author: String,
    date: String
  }],
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.patch('/api/posts/:id/like', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/posts/:id/comment', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: req.body } },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/upload', upload.single('image'), (req, res) => {
  try {
    res.json({ url: `http://localhost:5000/uploads/${req.file.filename}` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
