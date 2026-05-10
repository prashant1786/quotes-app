# 📝 Random Quote Generator

A simple and elegant React + Vite application that displays a random quote on the screen and allows users to generate a new quote with a single click.

---

## 📌 Overview

This project is part of the **Web Dev Cohort 2026** assignment:  
**FreeAPI Quotes Listing Application**

Instead of listing multiple quotes, this version shows **one quote at a time in a full-screen UI**, giving a clean and focused reading experience.

---

## ✨ Features

- Displays a single random quote
- Full-screen centered UI
- "New Quote" button to fetch another quote
- Loading state while fetching data
- Error handling for API failures
- Responsive and modern design

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS (optional styling)
- FreeAPI Quotes Endpoint

---

## 🌐 API Used

````

GET [https://api.freeapi.app/api/v1/public/quotes/quote/random](https://api.freeapi.app/api/v1/public/quotes/quote/random)

```id="api1"

---

## 📂 Project Structure

````

quotes-app/
│
├── src/
│ ├── App.jsx
│ └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

````id="structure1"

---

## 🚀 How It Works

1. App loads and calls the quotes API
2. A random quote is fetched
3. Quote is displayed in center of screen
4. User clicks **New Quote**
5. A new random quote is fetched and replaced

---

## ⚙️ Installation & Setup

### 1. Clone repository
```bash
git clone <your-repo-url>
cd quotes-app
````

### 2. Install dependencies

```bash id="install1"
npm install
```

### 3. Run project

```bash id="run1"
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

---

## 📦 Build

```bash id="build1"
npm run build
```
