# Search Engine and Favorites

Interactive web application built with React that allows users to search through a list of users and manage a favorites list with data persistence.

## Description

This application allows users to:
- Search through a list of users by name
- Mark users as favorites
- View contact information (email and city)
- Keep favorites saved even after closing the browser (localStorage)

## Technologies Used

- **React 18+** - Main library for user interface
- **React Hooks** - useState and useEffect for state management
- **SCSS** - CSS preprocessor for advanced styling
- **Vite** - Fast development tool
- **ESLint** - Linter to maintain clean code
- **LocalStorage API** - Data persistence in the browser

## Project Structure

**Main Files:**
- `src/main.jsx` - Entry point
- `src/components/App.jsx` - Main component
- `src/components/filters/Filters.jsx` - Search component
- `src/components/data/Users.jsx` - Users data
- `src/styles/App.scss` - Application styles

**Configuration:**
- `package.json` - Dependencies and scripts
- `eslint.config.js` - Code linting rules

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mcocapelaz/search-engine-and-favorites.git
```
Navigate to the project directory:

```bash
cd search-engine-and-favorites
```
Install dependencies:

```bash
npm install
```
Start the development server:

```bash
npm run dev
```
Open your browser at http://localhost:5173

## Main Features
- Search Engine
The Filters component allows real-time filtering of users by typing in the search field 

- Favorites System
Click on any user to mark/unmark them as favorite

- Favorites are automatically saved to localStorage 

- Favorites persist between browser sessions

## User Data
The application includes information for 4 users with the following data: Name, Email and City

## Technical Features
- State management with React Hooks (useState, useEffect) 

- Data persistence using localStorage 

- Reusable components with props

- Strict Mode enabled for problem detection 

- ESLint configured for clean and consistent code

## Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## License
This project is under the MIT License

## Author
Mónica Coca- @mcocapelaz - GitHub
