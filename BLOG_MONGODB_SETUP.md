# Blog System with MongoDB Setup

## Backend Setup

### 1. Install MongoDB
**Windows:**
- Download from https://www.mongodb.com/try/download/community
- Install MongoDB Community Server
- MongoDB will run on `mongodb://localhost:27017`

**Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
```

### 3. Start Backend Server
```bash
cd server
npm run dev
```

Server runs on `http://localhost:5000`

### 4. Environment Variables
Edit `server/.env`:
```
MONGODB_URI=mongodb://localhost:27017/portfolio-blog
PORT=5000
```

For MongoDB Atlas (Cloud - Free):
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio-blog
```

## MongoDB Atlas (Cloud - Recommended)

### 1. Create Free Account
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create free account
3. Create free M0 cluster (512MB)

### 2. Setup Database
1. Click "Connect"
2. Add your IP address (or 0.0.0.0/0 for all)
3. Create database user
4. Get connection string
5. Replace in `server/.env`

### 3. Security
- Whitelist your IP
- Use strong password
- Don't commit `.env` file

## API Endpoints

### Get All Posts
```
GET http://localhost:5000/api/posts
```

### Create Post
```
POST http://localhost:5000/api/posts
Body: {
  title, excerpt, content, tags, readTime
}
```

### Like Post
```
PATCH http://localhost:5000/api/posts/:id/like
```

### Add Comment
```
POST http://localhost:5000/api/posts/:id/comment
Body: { text, author, date }
```

## Usage

### 1. Start Backend
```bash
cd server
npm run dev
```

### 2. Start Frontend
```bash
npm run dev
```

### 3. Create Blog Post
- Navigate to `/admin/blog`
- Fill form and publish

### 4. View Blog
- Navigate to `/blog`
- Like, comment, search posts

## Production Deployment

### Backend (Render/Railway/Heroku)
1. Push server folder to Git
2. Set environment variables
3. Deploy

### Frontend
Update API_URL in:
- `src/components/Blog.jsx`
- `src/components/AdminBlog.jsx`

Change from:
```javascript
const API_URL = 'http://localhost:5000/api';
```

To:
```javascript
const API_URL = 'https://your-backend.com/api';
```

## Troubleshooting

**MongoDB not connecting:**
- Check MongoDB is running: `mongosh`
- Verify connection string in `.env`

**CORS errors:**
- Backend has CORS enabled
- Check API_URL matches backend URL

**Posts not showing:**
- Verify backend is running on port 5000
- Check browser console for errors
- Test API: `http://localhost:5000/api/posts`

## Features
✅ MongoDB database
✅ Express REST API
✅ Create, read posts
✅ Like posts
✅ Comment on posts
✅ Search functionality
✅ No Firebase needed
