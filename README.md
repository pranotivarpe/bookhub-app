# 📚 BookHub — Book Catalog App

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=flat-square&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/Material--UI-5.x-0081CB?style=flat-square&logo=mui&logoColor=white)

A modern book catalog web app built with **React** and **Material UI**. Discover books, search the catalog, explore by category, and find a random read — all in a clean, responsive interface.

---

## Features

- 🔍 **Search Books** — Find books by title, author, or keyword
- 🎲 **Random Book** — Discover a random book from the catalog
- 📖 **Explore Books** — Browse the full collection with filters
- 💬 **Dialog Details** — Click any book to see detailed information in a modal
- 📱 **Responsive Design** — Works on desktop and mobile via MUI components

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Material UI (MUI) 5 | Component library |
| React Router DOM 6 | Client-side navigation |
| Emotion | MUI styling engine |

---

## Project Structure

```
bookhub-app/
├── src/
│   ├── App.jsx           # Root component with routing
│   ├── NavBar.jsx        # Navigation bar
│   ├── ExploreBooks.jsx  # Book catalog with filters
│   ├── RandomBook.jsx    # Random book discovery
│   ├── SearchButton.jsx  # Search functionality
│   ├── DialogBox.jsx     # Book detail modal
│   └── assets/           # Images and static files
├── index.html
└── vite.config.js
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/pranotivarpe/bookhub-app.git
cd bookhub-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173`

```bash
# Build for production
npm run build
```