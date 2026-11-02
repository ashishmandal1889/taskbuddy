# 🚀 TaskBuddy — Modern Task Management App

TaskBuddy is a fast, responsive, and intuitive task management application built using **React 19** and **Vite**. It helps users organize and accomplish daily tasks with ease — featuring priority flags, categories, progress tracking, in-place editing, and persistent local storage.

---

## ✨ Features

- **Add Tasks**: Add new tasks with customized priority levels and categories.
- **Priority Indicators**: Organize by `High`, `Medium`, or `Low` priority with clear color-coded indicators.
- **Categories**: Categorize tasks under `General`, `Work`, `Personal`, `Study`, or `Health`.
- **Inline Editing**: Click the edit icon on any task to change its text, priority, or category anytime.
- **Completion Toggle**: Mark tasks complete with custom check buttons, updating visual status and strikethroughs.
- **Filter Tabs**: Filter between `All`, `Active`, and `Done` tasks.
- **Visual Progress Tracker**: Dynamic progress bar calculating completion rate in real-time, plus a celebration banner when all tasks are finished.
- **Persistence**: Tasks are automatically saved to browser `localStorage` and restored across sessions.
- **Clear All Tasks**: One-click cleanup option to wipe all tasks with a safety confirmation prompt.
- **Dark Theme UI**: Clean modern dark mode interface with responsive layout for mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vite.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: CSS3 with modern variables, flexbox, and responsive media queries
- **Storage**: Browser `localStorage` API

---

## 🚀 Getting Started

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or newer) installed.

### 2. Installation
Open the project directory and install dependencies:
```bash
cd TaskBuddy-Project
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to start using TaskBuddy!

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
TaskBuddy-Project/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and SVG icons
│   ├── components/
│   │   ├── ProgressTracker.jsx  # Progress bar & completion tracker
│   │   ├── TaskForm.jsx         # Input form for adding tasks
│   │   └── TaskList.jsx         # Task listing, filtering & inline editing
│   ├── App.jsx             # Main application component & state logic
│   ├── Style.css           # Modern theme styling & responsiveness
│   ├── index.css           # Base styles & typography
│   └── main.jsx            # React root mount
├── index.html              # HTML shell
├── package.json            # Project dependencies & scripts
└── vite.config.js          # Vite configuration
```

---

## 📄 License
This project is open-source and free to use for personal and learning purposes.
