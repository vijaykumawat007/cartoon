# CartoonCentral - Entertainment Hub 🎬

A complete cartoon and anime entertainment website with advanced features, special effects, and comprehensive show/character database.

## 📋 Features Implemented

### Core Features
✅ **15 Shows Database** - Including:
- Indian Cartoons: Motu Patlu, Kick Buttowski, Roll No 21, Chota Bheem, Doraemon, Shin Chan, Ninja Hattori
- Popular Anime: One Piece, Naruto, Naruto Shippuden, Boruto, Demon Slayer, Solo Leveling
- Classics: Tom and Jerry, Dora the Explorer

✅ **16 Character Profiles** - With images and show associations

✅ **Search Functionality** - Live search across shows and characters with dropdown results

✅ **Favorites System** - Add/remove favorites with localStorage persistence

✅ **Viewing History** - Track watched shows with timestamp

✅ **Rating & Reviews** - 5-star rating system with user reviews

✅ **Filter System** - Filter by category (All, Action, Comedy, Adventure, Kids)

✅ **Theme Toggle** - Dark/Light mode with persistence

✅ **Responsive Design** - Mobile, tablet, and desktop optimized

### Special Effects & Advanced Features
✨ **Visual Effects**:
- Confetti burst animations on favorites
- Floating ambient particles
- Cursor glow effect
- Button glow and ripple effects
- 3D card tilt on mouse movement
- Glitch text effects
- Rainbow color animations
- Magnetic button effects
- Lightning effects
- Parallax scrolling
- Typewriter text effect
- Scroll reveal animations

🎨 **UI/UX Enhancements**:
- Smooth transitions and animations
- Gradient backgrounds
- Custom scrollbar styling
- Modal system with carousel
- Scrollable reviews section
- Contact form
- Hamburger menu for mobile

## 📂 Project Structure

```
cartoon/
├── index.html          # Main HTML with all sections
├── css/
│   └── style.css       # Complete styling with 1700+ lines
└── js/
    └── script.js       # Full functionality with 1300+ lines
```

## 🚀 How to Use

1. **Open the website**: Open `index.html` in your browser
2. **Explore Shows**: Scroll through the carousel or use filters
3. **Search**: Use the search bar to find shows/characters
4. **Rate & Review**: Click "Watch" to open modal, add ratings and reviews
5. **Add to Favorites**: Click the heart icon on any show
6. **View History**: Click the history button to see watched shows
7. **Toggle Theme**: Click the moon/sun icon for light/dark mode

## 📊 Database

### Shows (20 total)
Each show includes:
- Name
- Category (Action, Comedy, Adventure, Kids)
- Emoji icon
- Placeholder image URL
- Rating (1-5 stars)
- Review count
- Description

### Characters (16 total)
Each character includes:
- Name
- Associated anime
- Emoji icon
- Placeholder image URL

## 💾 Local Storage

The website uses localStorage to persist:
- **cartoonFavorites** - User's favorite shows
- **cartoonHistory** - Watched shows
- **cartoonReviews** - User reviews
- **cartoonRatings** - User ratings
- **cartoonTheme** - Theme preference

## 🎨 Customization

### Adding More Shows
Edit `js/script.js` and add to `showsData` array:
```javascript
{ 
  name: 'Show Name', 
  category: 'action|comedy|adventure|kids', 
  emoji: '🎬',
  img: 'image-url',
  rating: 4.5,
  reviews: 2300 
}
```

### Adding More Characters
Edit `js/script.js` and add to `charactersData` array:
```javascript
{ 
  name: 'Character Name', 
  anime: 'Show Name',
  emoji: '🦸',
  img: 'image-url'
}
```

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --primary-color: #FF6B6B;
  --secondary-color: #4ECDC4;
  --accent-color: #FFE66D;
  /* ... */
}
```

## 🔗 Image URLs

Currently using placeholder images from:
- `https://via.placeholder.com/300x200/` - Show images
- `https://via.placeholder.com/200x200/` - Character images

To use real images:
1. Replace image URLs with actual cartoon/anime image links
2. Ensure CORS is enabled for external images
3. Or host images locally in an `/images/` folder

## 🌐 Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: Below 768px

## ⚡ Performance Optimizations

- Lazy loading for images
- Debounced scroll events
- Optimized animations with CSS transforms
- Passive event listeners
- Efficient DOM queries

## 🎯 Future Enhancements

- Video player integration
- Backend API for shows/characters
- User accounts and profiles
- Social sharing features
- Advanced filtering and sorting
- Watch time tracking
- Recommendation engine

## 📄 License

Free to use and modify for personal projects.

---

**Created with ❤️ for Cartoon Lovers!**
