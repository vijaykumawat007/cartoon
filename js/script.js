/* ============================================
   CARTOON CENTRAL - OPTIMIZED JAVASCRIPT
   ============================================ */

// ============================================
// DATA & DOM INITIALIZATION
// ============================================

const favorites = JSON.parse(localStorage.getItem('cartoonFavorites')) || [];
const viewingHistory = JSON.parse(localStorage.getItem('cartoonHistory')) || [];
const reviews = JSON.parse(localStorage.getItem('cartoonReviews')) || {};
const userRatings = JSON.parse(localStorage.getItem('cartoonRatings')) || {};

const showsData = [
    { name: 'Motu Patlu', category: 'kids', emoji: '🤣', img: './images/motu-patlu.jpg', rating: 4.5, reviews: 2300 },
    { name: 'Kick Buttowski', category: 'kids', emoji: '🎪', img: './images/kick-btowski.jpg', rating: 4.2, reviews: 1800 },
    { name: 'Roll No 21', category: 'kids', emoji: '🏫', img: './images/roll-no-21.jpg', rating: 4.6, reviews: 2100 },
    { name: 'Chota Bheem', category: 'action', emoji: '💪', img: './images/chota-bheem.jpg', rating: 4.7, reviews: 3200 },
    { name: 'Doraemon', category: 'kids', emoji: '🤖', img: './images/doreamon.jpg', rating: 4.8, reviews: 3500 },
    { name: 'Shin Chan', category: 'comedy', emoji: '🍑', img: './images/shin-chan.jpg', rating: 4.9, reviews: 4100 },
    { name: 'One Piece', category: 'adventure', emoji: '🏴‍☠️', img: './images/one-piece.jpg', rating: 4.9, reviews: 5200 },
    { name: 'Naruto', category: 'action', emoji: '🥷', img: './images/naruto.jpg', rating: 4.8, reviews: 4800 },
    { name: 'Naruto Shippuden', category: 'action', emoji: '🔥', img: './images/naruto-shiphuden.jpg', rating: 4.9, reviews: 5100 },
    { name: 'Boruto', category: 'adventure', emoji: '⚡', img: './images/boruto.jpg', rating: 4.5, reviews: 2800 },
    { name: 'Demon Slayer', category: 'action', emoji: '⚔️', img: './images/demon-slyer.jpg', rating: 4.9, reviews: 4900 },
    { name: 'Solo Leveling', category: 'action', emoji: '👹', img: './images/solo-leveling.jpg', rating: 4.7, reviews: 3600 },
    { name: 'Tom and Jerry', category: 'comedy', emoji: '🐱', img: './images/tom-and-jerry.jpg', rating: 4.6, reviews: 4200 },
    { name: 'Dora the Explorer', category: 'kids', emoji: '🗺️', img: './images/dora-the-explorer.jpg', rating: 4.3, reviews: 1700 },
    { name: 'Ninja Hattori', category: 'action', emoji: '🥷', img: './images/ninja-hattori.jpg', rating: 4.6, reviews: 2600 }
];

const charactersData = [
    { name: 'Motu', anime: 'Motu Patlu', emoji: '🤣', img: './images/characters/motu.jpg' },
    { name: 'Patlu', anime: 'Motu Patlu', emoji: '😊', img: './images/characters/patlu.jpg' },
    { name: 'Chota Bheem', anime: 'Chota Bheem', emoji: '💪', img: './images/characters/chota-bheem.jpg' },
    { name: 'Dholakpur Gang', anime: 'Chota Bheem', emoji: '👯', img: './images/characters/dholakpur-gang.jpg' },
    { name: 'Doraemon', anime: 'Doraemon', emoji: '🤖', img: './images/characters/doraemon.jpg' },
    { name: 'Nobita', anime: 'Doraemon', emoji: '📚', img: './images/characters/nobita.jpg' },
    { name: 'Shin Chan', anime: 'Shin Chan', emoji: '🍑', img: './images/characters/shin-chan.jpg' },
    { name: 'Luffy', anime: 'One Piece', emoji: '🏴‍☠️', img: './images/characters/luffy.jpg' },
    { name: 'Naruto', anime: 'Naruto', emoji: '🥷', img: './images/characters/naruto.jpg' },
    { name: 'Sasuke', anime: 'Naruto', emoji: '🖤', img: './images/characters/sasuke.jpg' },
    { name: 'Sakura', anime: 'Naruto', emoji: '🌸', img: './images/characters/sakura.jpg' },
    { name: 'Tanjiro', anime: 'Demon Slayer', emoji: '⚔️', img: './images/characters/tanjiro.jpg' },
    { name: 'Tom', anime: 'Tom and Jerry', emoji: '🐱', img: './images/characters/tom.jpg' },
    { name: 'Jerry', anime: 'Tom and Jerry', emoji: '🐭', img: './images/characters/jerry.jpg' },
    { name: 'Dora', anime: 'Dora', emoji: '🗺️', img: './images/characters/dora.jpg' },
    { name: 'Ninja Hattori', anime: 'Ninja Hattori', emoji: '🥷', img: './images/characters/ninja-hattori.jpg' }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const carousel = document.querySelector('.carousel');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('modal');
const favoritesModal = document.getElementById('favoritesModal');
const historyModal = document.getElementById('historyModal');
const contactForm = document.querySelector('.contact-form');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const themeToggle = document.getElementById('themeToggle');
const favoritesBtn = document.getElementById('favoritesBtn');
const historyBtn = document.getElementById('historyBtn');

// ============================================
// CAROUSEL & CHARACTER GRID
// ============================================

function initializeCarousel() {
    carousel.innerHTML = '';
    showsData.forEach(show => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.dataset.category = show.category;
        item.innerHTML = `
            <div class="show-card">
                <div class="show-header">
                    <div class="show-image"><img src="${show.img}" alt="${show.name}" loading="lazy"></div>
                    <button class="favorite-icon" onclick="toggleFavorite(this, '${show.name}')">🤍</button>
                </div>
                <h3>${show.name}</h3>
                <p class="category-tag">${show.category.charAt(0).toUpperCase() + show.category.slice(1)}</p>
                <div class="rating">
                    <span class="stars">${'★'.repeat(Math.floor(show.rating))}${'☆'.repeat(5-Math.floor(show.rating))}</span>
                    <span class="rating-text">(${show.rating}/5) • ${(show.reviews/1000).toFixed(1)}K</span>
                </div>
                <p>${show.name} - Get ready for an amazing journey!</p>
                <button class="watch-btn" onclick="openModal('${show.name}', 'Experience ${show.name}!', '${show.emoji}')">Watch</button>
            </div>
        `;
        carousel.appendChild(item);
    });
    updateCarouselListeners();
}

function updateCarouselListeners() {
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', function() {
            if (!this.closest('button')) {
                const show = showsData.find(s => s.name === this.querySelector('h3').textContent);
                if (show) openModal(show.name, `Experience ${show.name}!`, show.emoji);
            }
        });
    });
}

function initializeCharacterGrid() {
    const grid = document.querySelector('.character-grid');
    if (!grid) return;
    grid.innerHTML = '';
    charactersData.forEach(char => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <div class="character-avatar"><img src="${char.img}" alt="${char.name}" loading="lazy"></div>
            <h3>${char.name}</h3>
            <p>From ${char.anime}</p>
        `;
        grid.appendChild(card);
    });
}

// ============================================
// SEARCH - AI POWERED
// ============================================

function fuzzyMatch(query, text) {
    if (query.length > text.length) return 0;
    if (query === text) return 1;
    
    let match = 0, textIndex = 0;
    for (let i = 0; i < query.length; i++) {
        while (textIndex < text.length && text[textIndex] !== query[i]) textIndex++;
        if (textIndex >= text.length) return 0;
        match++;
        textIndex++;
    }
    return match / text.length;
}

function performSmartSearch(query) {
    const results = [];
    
    showsData.forEach(show => {
        const score = Math.max(
            fuzzyMatch(query, show.name.toLowerCase()),
            show.category.toLowerCase().includes(query) ? 0.5 : 0
        );
        if (score > 0.3) results.push({ name: show.name, type: 'Show', img: show.img, rating: show.rating, score });
    });
    
    charactersData.forEach(char => {
        const score = Math.max(
            fuzzyMatch(query, char.name.toLowerCase()),
            char.anime.toLowerCase().includes(query) ? 0.5 : 0
        );
        if (score > 0.3) results.push({ name: char.name, type: 'Character', img: char.img, score });
    });
    
    return results.sort((a, b) => b.score - a.score);
}

function getTrendingShows() {
    return showsData.filter(s => s.rating >= 4.7).sort((a, b) => b.rating - a.rating).slice(0, 5);
}

function getRecommendations() {
    const categories = {};
    viewingHistory.forEach(name => {
        const show = showsData.find(s => s.name === name);
        if (show) categories[show.category] = (categories[show.category] || 0) + 1;
    });
    
    const preferred = Object.keys(categories).sort((a, b) => categories[b] - categories[a])[0];
    if (!preferred) return [];
    
    return showsData
        .filter(s => s.category === preferred && !viewingHistory.includes(s.name) && !favorites.includes(s.name))
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
}

function displaySearchSuggestions() {
    const trending = getTrendingShows();
    const recommendations = getRecommendations();
    
    let html = '<div style="padding: 10px 0;">';
    
    if (recommendations.length > 0) {
        html += '<div style="padding: 8px 15px; font-size: 0.85rem; color: var(--accent-color); font-weight: bold;">✨ RECOMMENDED FOR YOU</div>';
        recommendations.slice(0, 3).forEach(show => {
            html += `<div class="search-result-item" onclick="handleSearchResult('${show.name}', 'Show')">
                <img src="${show.img}" alt="${show.name}" class="search-result-img">
                <div style="flex: 1;"><strong>${show.name}</strong><div class="result-type">Show • ⭐ ${show.rating}</div></div>
            </div>`;
        });
    }
    
    html += '<div style="padding: 8px 15px; font-size: 0.85rem; color: var(--accent-color); font-weight: bold; margin-top: 10px;">🔥 TRENDING NOW</div>';
    trending.forEach(show => {
        html += `<div class="search-result-item" onclick="handleSearchResult('${show.name}', 'Show')">
            <img src="${show.img}" alt="${show.name}" class="search-result-img">
            <div style="flex: 1;"><strong>${show.name}</strong><div class="result-type">Show • ⭐ ${show.rating}</div></div>
        </div>`;
    });
    
    html += '</div>';
    searchResults.innerHTML = html;
    searchResults.style.display = 'block';
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length === 0) {
        displaySearchSuggestions();
        return;
    }

    const results = performSmartSearch(query);
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div style="padding: 15px; text-align: center;">🔍 No results found</div>';
    } else {
        searchResults.innerHTML = `<div style="padding: 10px 0;">
            <div style="padding: 8px 15px; font-size: 0.85rem; color: var(--accent-color); font-weight: bold;">🤖 AI RESULTS (${results.length})</div>
            ${results.map(r => `<div class="search-result-item" onclick="handleSearchResult('${r.name}', '${r.type}')">
                <img src="${r.img}" alt="${r.name}" class="search-result-img">
                <div style="flex: 1;"><strong>${r.name}</strong><div class="result-type">${r.type}${r.rating ? ` • ⭐ ${r.rating}` : ''}</div></div>
            </div>`).join('')}
        </div>`;
    }
    
    searchResults.style.display = 'block';
});

searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim().length === 0) displaySearchSuggestions();
});

// ============================================
// FAVORITES & HISTORY
// ============================================

function toggleFavorite(el, name) {
    const idx = favorites.indexOf(name);
    if (idx > -1) {
        favorites.splice(idx, 1);
        el.textContent = '🤍';
        el.classList.remove('favorited');
    } else {
        favorites.push(name);
        el.textContent = '❤️';
        el.classList.add('favorited');
    }
    localStorage.setItem('cartoonFavorites', JSON.stringify(favorites));
    updateFavoritesCount();
}

function updateFavoritesCount() {
    document.getElementById('favCount').textContent = favorites.length;
}

function displayFavorites() {
    const list = document.getElementById('favoritesList');
    if (favorites.length === 0) {
        list.innerHTML = '<p class="empty-message">No favorites yet!</p>';
    } else {
        list.innerHTML = favorites.map(fav => {
            const show = showsData.find(s => s.name === fav);
            return `<div class="favorite-item">
                <img src="${show.img}" alt="${fav}" class="favorite-item-img">
                <span class="item-name">${fav}</span>
                <button class="item-remove" onclick="removeFavorite('${fav}')">Remove</button>
            </div>`;
        }).join('');
    }
}

function removeFavorite(name) {
    const idx = favorites.indexOf(name);
    if (idx > -1) {
        favorites.splice(idx, 1);
        localStorage.setItem('cartoonFavorites', JSON.stringify(favorites));
        displayFavorites();
        updateFavoritesCount();
    }
}

function addToHistory(name) {
    const idx = viewingHistory.indexOf(name);
    if (idx > -1) viewingHistory.splice(idx, 1);
    viewingHistory.unshift(name);
    if (viewingHistory.length > 10) viewingHistory.pop();
    localStorage.setItem('cartoonHistory', JSON.stringify(viewingHistory));
    updateHistoryCount();
}

function displayHistory() {
    const list = document.getElementById('historyList');
    if (viewingHistory.length === 0) {
        list.innerHTML = '<p class="empty-message">No history yet.</p>';
    } else {
        list.innerHTML = viewingHistory.map(name => {
            const show = showsData.find(s => s.name === name);
            return `<div class="history-item">
                <img src="${show.img}" alt="${name}" class="history-item-img">
                <span class="item-name">${name}</span>
                <button class="item-remove" onclick="removeFromHistory('${name}')">Clear</button>
            </div>`;
        }).join('');
    }
}

function removeFromHistory(name) {
    const idx = viewingHistory.indexOf(name);
    if (idx > -1) {
        viewingHistory.splice(idx, 1);
        localStorage.setItem('cartoonHistory', JSON.stringify(viewingHistory));
        displayHistory();
        updateHistoryCount();
    }
}

function updateHistoryCount() {
    document.getElementById('histCount').textContent = viewingHistory.length;
}

favoritesBtn.addEventListener('click', () => {
    displayFavorites();
    favoritesModal.style.display = 'block';
});

historyBtn.addEventListener('click', () => {
    displayHistory();
    historyModal.style.display = 'block';
});

// ============================================
// MODAL FUNCTIONALITY
// ============================================

let currentShowEmoji = '';

function openModal(title, description, emoji = '') {
    currentShowEmoji = emoji;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    const show = showsData.find(s => s.name === title);
    const modalEmoji = document.getElementById('modalEmoji');
    if (show) {
        modalEmoji.innerHTML = `<img src="${show.img}" alt="${title}" class="modal-emoji-img">`;
    } else {
        modalEmoji.textContent = emoji;
    }
    loadReviews(title);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    addToHistory(title);
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function playShow() {
    alert('🎬 Loading your show... Streaming now!');
    closeModal();
}

function closeFavoritesModal() {
    favoritesModal.style.display = 'none';
}

function closeHistoryModal() {
    historyModal.style.display = 'none';
}

// ============================================
// REVIEWS & RATINGS
// ============================================

function loadReviews(name) {
    const list = document.getElementById('reviewsList');
    const showReviews = reviews[name] || [];
    list.innerHTML = showReviews.length === 0 
        ? '<p class="no-reviews">Be the first to review!</p>'
        : showReviews.map(r => `<div class="review-item"><div class="review-name">⭐ ${r.name}</div><div class="review-text">${r.text}</div></div>`).join('');
}

function submitReview() {
    const name = document.getElementById('reviewName').value.trim();
    const text = document.getElementById('reviewText').value.trim();
    const title = document.getElementById('modalTitle').textContent;
    
    if (!name || !text) {
        alert('Please fill in all fields!');
        return;
    }
    
    if (!reviews[title]) reviews[title] = [];
    reviews[title].unshift({ name, text });
    if (reviews[title].length > 10) reviews[title].pop();
    
    localStorage.setItem('cartoonReviews', JSON.stringify(reviews));
    document.getElementById('reviewName').value = '';
    document.getElementById('reviewText').value = '';
    loadReviews(title);
}

function rateShow(rating) {
    const title = document.getElementById('modalTitle').textContent;
    userRatings[title] = rating;
    localStorage.setItem('cartoonRatings', JSON.stringify(userRatings));
    
    document.querySelectorAll('.star').forEach((star, idx) => {
        star.classList.toggle('active', idx < rating);
    });
    
    showNotification(`✅ Rated ${title} ${rating} stars!`, 'success');
}

// ============================================
// UTILITIES & EVENTS
// ============================================

function showNotification(msg, type = 'info') {
    const notif = document.createElement('div');
    notif.textContent = msg;
    notif.style.cssText = `
        position: fixed; top: 20px; right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#4ECDC4' : '#FF6B6B'};
        color: white; border-radius: 8px; z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;
    document.body.appendChild(notif);
    setTimeout(() => {
        notif.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

function handleSearchResult(name, type) {
    searchResults.style.display = 'none';
    searchInput.value = '';
    if (type === 'Show') {
        const show = showsData.find(s => s.name === name);
        if (show) openModal(show.name, `Discover ${show.name}!`, show.emoji);
    } else {
        alert(`Check out ${name} in Characters section! 🎭`);
    }
}

// ============================================
// THEME TOGGLE
// ============================================

function initializeTheme() {
    const theme = localStorage.getItem('cartoonTheme') || 'dark';
    document.body.classList.toggle('light-theme', theme === 'light');
    updateThemeButton();
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('cartoonTheme', isLight ? 'light' : 'dark');
    updateThemeButton();
}

function updateThemeButton() {
    themeToggle.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', toggleTheme);

// ============================================
// NAVIGATION & FILTERS
// ============================================

hamburger.addEventListener('click', () => nav.classList.toggle('active'));

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        document.querySelectorAll('.carousel-item').forEach(item => {
            item.style.display = (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
        });
        carousel.scrollLeft = 0;
    });
});

// Carousel buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => carousel.scrollBy({ left: -300, behavior: 'smooth' }));
nextBtn.addEventListener('click', () => carousel.scrollBy({ left: 300, behavior: 'smooth' }));

// ============================================
// CONTACT FORM
// ============================================

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! Message sent to ${email}`);
        contactForm.reset();
    }
});

// ============================================
// MODAL CLOSE HANDLERS
// ============================================

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
    if (e.target === favoritesModal) closeFavoritesModal();
    if (e.target === historyModal) closeHistoryModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeFavoritesModal();
        closeHistoryModal();
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) searchResults.style.display = 'none';
});

// ============================================
// SCROLL & ANIMATIONS
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        if (pageYOffset >= section.offsetTop - 200) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slideInLeft 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// ============================================
// SPECIAL EFFECTS & ENHANCEMENTS
// ============================================

function createBubbles() {
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        document.body.appendChild(bubble);
    }
}

function createConfetti(x, y) {
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / 8;
        const velocity = 3 + Math.random() * 2;
        
        particle.style.cssText = `
            position: fixed; left: ${x}px; top: ${y}px;
            width: 8px; height: 8px; border-radius: 50%;
            background: ${['#FF6B6B', '#4ECDC4', '#FFE66D'][Math.floor(Math.random() * 3)]};
            pointer-events: none; z-index: 9999;
        `;
        
        document.body.appendChild(particle);
        
        let px = x, py = y, vx = Math.cos(angle) * velocity, vy = Math.sin(angle) * velocity - 2, life = 1;
        
        const animate = () => {
            vx *= 0.98; vy += 0.15;
            px += vx; py += vy;
            life -= 0.015;
            
            particle.style.left = px + 'px';
            particle.style.top = py + 'px';
            particle.style.opacity = life;
            
            if (life > 0) requestAnimationFrame(animate);
            else particle.remove();
        };
        animate();
    }
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('favorite-icon') && e.target.textContent === '❤️') {
        createConfetti(e.clientX, e.clientY);
    }
});

// ============================================
// PAGE INITIALIZATION
// ============================================

window.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
    initializeCharacterGrid();
    initializeTheme();
    updateFavoritesCount();
    updateHistoryCount();
    createBubbles();
});

if (document.readyState !== 'loading') {
    initializeCarousel();
    initializeCharacterGrid();
    initializeTheme();
    updateFavoritesCount();
    updateHistoryCount();
    createBubbles();
}

console.log(`
╔═══════════════════════════════════════╗
║   🎬 CartoonCentral - Optimized     ║
║   Clean, Fast & Powerful            ║
╚═══════════════════════════════════════╝
`);
