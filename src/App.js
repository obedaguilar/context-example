import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button';
 
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
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
     <Button/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
