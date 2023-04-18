import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
 
const themes = {
  'dark': {
    backgroundColor: 'black',
    color: 'white'
  },
  'light': {
    backgroundColor: 'white',
    color: 'black'
  }
}

// 1. Crear el contexto
export const ThemeContext = React.createContext();

// 2. Crear el componente que provee el contexto

function App() {
  const [theme, setTheme] = React.useState(themes.dark);
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
     <Button/>
     <Card/>
     <button onClick={() => setTheme(themes.light)}>Modo Claro</button>
     <button onClick={() => setTheme(themes.dark)}>Modo oscuro</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
