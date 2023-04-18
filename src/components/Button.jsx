import React, { useContext } from 'react'
import { ThemeContext } from '../App.js'

const Button = () => {
    const context = useContext(ThemeContext);
    console.log(context);
  return (
    <div>
      <button style={
        {
            backgroundColor: context.backgroundColor,
            color: context.color,
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'

        }
      }>Click me</button>
    </div>
  )
}

export default Button
