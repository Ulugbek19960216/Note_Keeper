import React from 'react'

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer>
         <p>Copyright {year}</p>
    </footer>
  )
}
