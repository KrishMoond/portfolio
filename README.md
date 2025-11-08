# 🚀 Krish Moond - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my projects, skills, and experience as a Frontend Developer.

## ✨ Features

- **Modern Design**: Glassmorphism UI with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: 3D tilt effects, magnetic buttons, and hover animations
- **Blog System**: MongoDB-powered blog with likes, comments, and search
- **Command Palette**: Quick navigation with Cmd/Ctrl+K
- **GitHub Integration**: Live GitHub stats and activity
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **Three.js** - 3D background effects

### Backend (Blog)
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Multer** - File upload handling

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (for blog functionality)

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/KrishMoond/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend Setup (Blog)

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
echo "MONGODB_URI=mongodb://localhost:27017/portfolio-blog" > .env
echo "PORT=5000" >> .env

# Start server
npm run dev
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

### Backend (Railway/Render)
1. Connect your GitHub repository
2. Set start command: `npm start`
3. Add environment variables (MONGODB_URI)
4. Deploy!

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── server/             # Backend API
│   ├── index.js        # Express server
│   ├── package.json    # Backend dependencies
│   └── uploads/        # Uploaded images
└── package.json        # Frontend dependencies
```

## 🎨 Key Components

- **BentoHome**: Modern bento grid homepage with magnetic buttons
- **TimelineAbout**: Timeline-based about section with story
- **ModernProjects**: Masonry grid project showcase with filters
- **InteractiveSkills**: Categorized skills with certifications
- **ModernEducation**: Education timeline with achievements
- **Blog**: Full-featured blog with MongoDB backend
- **CommandPalette**: Quick navigation (Cmd/Ctrl+K)
- **FloatingDock**: macOS-style navigation dock

## 🌟 Features in Detail

### Performance
- Lazy loading for route components
- Optimized images with proper sizing
- Code splitting for better load times
- Minimal bundle size with tree shaking

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip to content link
- High contrast text
- Focus visible indicators

### SEO
- Meta tags for social sharing
- Open Graph protocol
- Twitter Card support
- Semantic HTML
- Alt text for images

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Krish Moond**
- GitHub: [@KrishMoond](https://github.com/KrishMoond)
- LinkedIn: [krish-moond](https://linkedin.com/in/krish-moond)
- Email: moondkrish921@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from React Icons
- Images from Unsplash
- Fonts from Google Fonts (Inter)

---

Built with ❤️ by Krish Moond
