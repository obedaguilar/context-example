import React from 'react'
import { ThemeContext } from '../App'
const Card = () => {
    const context = React.useContext(ThemeContext)
  return (
    <div style={
        {
            backgroundColor: context.backgroundColor,
            color: context.color,
        }
    }>
        <p>Hola Mundo</p>
        <h1>Card</h1>

      
    </div>
  )
}

export default Card
