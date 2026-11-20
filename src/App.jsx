import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  function toggleTheme() {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    document.documentElement.dataset.theme = newTheme;
  }

  return (
    <>
      <Header 
        themeMode={themeMode}
        toggleTheme={toggleTheme}
      />
      <Nav />
      <Main />
      <Footer />
    </>
  )
}

export default App
