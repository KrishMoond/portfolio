# Blog System Setup Guide

## Firebase Setup (Free Tier)

### 1. Create Firebase Project
1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Name it "portfolio-blog"
4. Disable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Firestore Database
1. In Firebase Console, click "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select your region
5. Click "Enable"

### 3. Get Firebase Config
1. Click the gear icon → "Project settings"
2. Scroll to "Your apps" section
3. Click the web icon (</>)
4. Register app name: "portfolio"
5. Copy the firebaseConfig object

### 4. Update Firebase Config
Open `src/firebase.js` and replace with your config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 5. Install Firebase
```bash
npm install firebase
```

### 6. Firestore Security Rules (Production)
In Firebase Console → Firestore → Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
      allow update: if true; // For likes and comments
    }
  }
}
```

## Usage

### Creating Blog Posts
1. Navigate to `/admin/blog`
2. Fill in the form:
   - Title
   - Excerpt (short description)
   - Content (full post)
   - Tags (comma separated)
   - Read Time (e.g., "5 min")
3. Click "Publish Post"

### Viewing Blog
- Navigate to `/blog`
- Search posts by title, excerpt, or tags
- Click any post to read full content
- Like posts and add comments

### Features
- ✅ Create, read blog posts
- ✅ Like posts
- ✅ Comment on posts
- ✅ Search functionality
- ✅ Tag filtering
- ✅ Responsive design
- ✅ Real-time updates

## Alternative: Without Firebase

If you don't want to use Firebase, the blog will work with local fallback data. Posts are stored in the component state.

To add posts without Firebase:
1. Edit `src/components/Blog.jsx`
2. Add posts to the fallback array in the `catch` block

## Troubleshooting

**Error: Firebase not initialized**
- Make sure you've added your Firebase config to `src/firebase.js`
- Run `npm install firebase`

**Error: Permission denied**
- Check Firestore security rules
- Make sure test mode is enabled for development

**Posts not showing**
- Check browser console for errors
- Verify Firebase config is correct
- Check Firestore database has "posts" collection

## Production Deployment

1. Update Firestore rules for security
2. Add authentication for admin panel
3. Consider adding:
   - Rich text editor (Quill, TinyMCE)
   - Image uploads
   - Post categories
   - Draft/Published status
   - Edit/Delete functionality
