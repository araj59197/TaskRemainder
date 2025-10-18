# 📝 Task Remainder - Advanced Task Management App

<div align="center">

![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Advanced-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A modern, feature-rich task management application built with React**

[Live Demo](#) | [Features](#-features) | [Installation](#-installation) | [Usage](#-usage)

</div>

---

## 🌟 Overview

**Task Remainder** is a professional-grade task management application that demonstrates advanced React concepts, modern CSS techniques, and exceptional UX design. Built from scratch with no external UI libraries, this project showcases clean code architecture and best practices in modern web development.

### ✨ What Makes This Special?

- 🎨 **Beautiful UI/UX** - Professionally designed interface with smooth animations
- 🌙 **Dark Mode** - Complete theme switching with localStorage persistence
- 📊 **Real-time Analytics** - Live statistics dashboard tracking your productivity
- 🔍 **Smart Search & Filter** - Instantly find and organize tasks
- 🎯 **Priority System** - Visual color-coding for task importance
- 💾 **Auto-save** - Never lose your data with automatic localStorage sync
- 📱 **Fully Responsive** - Perfect experience on any device
- ✨ **Smooth Animations** - Professional transitions and micro-interactions

---

## 🎯 Features

### Core Functionality

| Feature | Description |
|---------|-------------|
| ➕ **Add Tasks** | Create tasks with name, priority (High/Medium/Low), and category (General/Work/Personal) |
| ✅ **Complete Tasks** | Mark tasks as done with visual strikethrough effect |
| 🗑️ **Delete Tasks** | Remove individual tasks or clear all at once |
| 📊 **Progress Tracking** | Visual progress bar showing completion percentage |

### Advanced Features

#### 🌙 Dark Mode
- Toggle between light and dark themes
- Smooth color transitions
- Preference saved in localStorage
- Optimized color palette for each theme

#### 📊 Statistics Dashboard
- **Total Tasks** - Overall task count
- **Active Tasks** - Incomplete tasks
- **Completed Tasks** - Finished tasks
- **High Priority** - Urgent tasks counter
- Animated cards with hover effects

#### 🔍 Search & Filter System
- **Real-time Search** - Find tasks instantly as you type
- **Smart Filtering** - Filter by All/Active/Completed
- **Combined Search** - Works with filters simultaneously
- **Visual Feedback** - Active filter highlighting

#### 🎨 Priority Color Coding
- 🔴 **High Priority** - Red left border
- 🟠 **Medium Priority** - Orange left border  
- 🟢 **Low Priority** - Green left border
- Instant visual identification of task importance

#### 💾 Data Persistence
- Auto-save all tasks to localStorage
- Theme preference persistence
- Load saved data on app start
- Confirmation dialogs for destructive actions

#### ✨ Animations & Transitions
- Slide-in animation for new tasks
- Staggered animations for dashboard cards
- Floating empty state icon
- Shimmer effect on progress bar
- Transform effects on hover
- Smooth theme transitions

---

## 🛠️ Technology Stack

### Frontend
- **React 18** - Component-based UI framework
- **React Hooks** - useState, useEffect for state management
- **Vite** - Next-generation frontend tooling
- **CSS3** - Advanced styling with custom properties

### Key Technologies & Concepts

#### React Concepts
- ✅ Functional Components
- ✅ React Hooks (useState, useEffect)
- ✅ Props & Component Communication
- ✅ Conditional Rendering
- ✅ Event Handling
- ✅ Component Lifecycle
- ✅ State Management
- ✅ Array Methods (map, filter)

#### CSS Techniques
- ✅ CSS Custom Properties (Variables)
- ✅ Flexbox & Grid Layouts
- ✅ Animations & Keyframes
- ✅ Gradients & Shadows
- ✅ Transforms & Transitions
- ✅ Pseudo-elements (::before, ::after)
- ✅ Data Attribute Selectors
- ✅ Media Queries (Responsive Design)

#### Web APIs
- ✅ localStorage API
- ✅ classList API
- ✅ Browser Storage

---

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/araj59197/TaskRemainder.git
   cd TaskRemainder/TaskRemainder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
```

---

## 🚀 Usage

### Getting Started

1. **Add Your First Task**
   - Enter task name in the input field
   - Select priority level (High/Medium/Low)
   - Choose category (General/Work/Personal)
   - Click "ADD TASK"

2. **Manage Tasks**
   - ✓ **Complete**: Click the "✓ Complete" button
   - ↩ **Undo**: Click "↩ Undo" on completed tasks
   - 🗑 **Delete**: Click "🗑 Delete" to remove

3. **Use Advanced Features**
   - 🌙 Click moon/sun icon to toggle dark mode
   - 🔍 Type in search box to find tasks
   - 🎯 Click filter buttons (All/Active/Completed)
   - 📊 View statistics in the dashboard

### Screenshots

#### Light Mode
```
┌─────────────────────────────────────────┐
│  Task Remainder            🌙           │
│  Stay organized, stay productive        │
├─────────────────────────────────────────┤
│  [12 Total] [8 Active] [4 Done] [3 High]│
├─────────────────────────────────────────┤
│  [Enter task...] [Priority] [Category]  │
│  [🔍 Search...] [All] [Active] [Done]   │
├─────────────────────────────────────────┤
│  🔴 High priority task         ✓ Delete │
│  🟠 Medium priority task       ✓ Delete │
│  🟢 Low priority task          ✓ Delete │
├─────────────────────────────────────────┤
│  Progress: ████████░░░░░░░░░░ 40%      │
│  [🗑️ Clear All Tasks]                   │
└─────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
TaskRemainder/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Taskform.jsx          # Task input form component
│   │   ├── TaskList.jsx           # Task list display component
│   │   └── Progresstracker.jsx    # Progress bar component
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # App-specific styles
│   ├── Style.css                  # Global styles & advanced CSS
│   ├── index.css                  # Base styles
│   └── main.jsx                   # Application entry point
├── ADVANCED_FEATURES.md           # Technical feature documentation
├── USER_GUIDE.md                  # User manual
├── README.md                      # This file
├── package.json
├── vite.config.js
└── index.html
```

---

## 🎨 Design Philosophy

### Color Palette

#### Light Mode
- **Primary**: Purple Gradient (#667eea → #764ba2)
- **Accent**: #667eea
- **Background**: #ffffff
- **Text**: #1a202c
- **Borders**: #e2e8f0

#### Dark Mode
- **Background**: #1a202c
- **Card Background**: #2d3748
- **Text**: #f7fafc
- **Borders**: #4a5568

### Typography
- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, Segoe UI
- **Headings**: 800 weight, gradient text effect
- **Body**: 500-600 weight for readability

---

## 💡 Key Code Highlights

### State Management with Hooks
```javascript
const [tasks, setTasks] = useState([]);
const [darkMode, setDarkMode] = useState(false);
const [filter, setFilter] = useState('all');
const [searchQuery, setSearchQuery] = useState('');
```

### Smart Filtering Logic
```javascript
const getFilteredTasks = () => {
  let filtered = tasks;
  
  // Apply status filter
  if (filter === 'active') {
    filtered = filtered.filter(task => !task.completed);
  } else if (filter === 'completed') {
    filtered = filtered.filter(task => task.completed);
  }
  
  // Apply search filter
  if (searchQuery.trim() !== '') {
    filtered = filtered.filter(task =>
      task.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.priority.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  return filtered;
}
```

### Data Persistence
```javascript
// Load from localStorage
useEffect(() => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);

// Save to localStorage
useEffect(() => {
  if (tasks.length > 0) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}, [tasks]);
```

---

## 🎯 Learning Outcomes

This project demonstrates proficiency in:

### React Skills
- ✅ Component architecture and reusability
- ✅ State management with hooks
- ✅ Effect hooks and lifecycle methods
- ✅ Event handling and user interactions
- ✅ Conditional rendering patterns
- ✅ Props and component communication

### JavaScript Skills
- ✅ ES6+ syntax (arrow functions, destructuring, spread operator)
- ✅ Array methods (map, filter, reduce)
- ✅ Template literals
- ✅ JSON manipulation
- ✅ Browser APIs (localStorage)

### CSS Skills
- ✅ Modern layout techniques (Flexbox, Grid)
- ✅ CSS animations and transitions
- ✅ Responsive design patterns
- ✅ CSS custom properties for theming
- ✅ Advanced selectors and pseudo-elements

### Software Development
- ✅ Clean code principles
- ✅ Component-based architecture
- ✅ User experience design
- ✅ Data persistence strategies
- ✅ Performance optimization

---

## 🚀 Future Enhancements

Potential features for version 2.0:

- [ ] Drag and drop to reorder tasks
- [ ] Task due dates and reminders
- [ ] Task categories management (add/edit/delete)
- [ ] Export tasks to CSV/JSON
- [ ] Task notes and detailed descriptions
- [ ] Subtasks/checklist items
- [ ] Tag system for better organization
- [ ] Calendar view integration
- [ ] Task sharing and collaboration
- [ ] Cloud sync across devices
- [ ] Email notifications
- [ ] Analytics and productivity insights

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Aditya Raj**
- GitHub: [@araj59197](https://github.com/araj59197)
- Repository: [TaskRemainder](https://github.com/araj59197/TaskRemainder)

---

## 🙏 Acknowledgments

- React Documentation
- Vite Documentation
- CSS Tricks Community
- Modern CSS Design Patterns
- React Hooks Best Practices

---

## 📞 Contact & Support

If you have any questions or need support:

- **Issues**: [GitHub Issues](https://github.com/araj59197/TaskRemainder/issues)
- **Discussions**: [GitHub Discussions](https://github.com/araj59197/TaskRemainder/discussions)

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Made with ❤️ and React**

</div>

---

## 📊 Project Statistics

- **Components**: 4 main components
- **Lines of Code**: ~700+ lines
- **CSS Properties**: 50+ custom properties
- **Animations**: 10+ smooth animations
- **Features**: 10+ advanced features
- **Browser Support**: All modern browsers
- **Performance**: Optimized with Vite
- **Bundle Size**: < 100KB (minified)

---

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds.

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📝 Version History

### v1.0.0 (Current)
- ✅ Complete task management functionality
- ✅ Dark mode implementation
- ✅ Search and filter system
- ✅ Statistics dashboard
- ✅ Priority color coding
- ✅ Smooth animations
- ✅ Data persistence
- ✅ Responsive design

---

<div align="center">

**Built with modern web technologies and best practices**

React • Vite • CSS3 • JavaScript • localStorage

</div>


The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
