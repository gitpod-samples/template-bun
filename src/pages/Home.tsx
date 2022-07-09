import React from 'react'
import "assets/css/App.css"

export default function Home() {
  const logo = require("../assets/images/logo.svg")
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Welcome to React!</h3>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  )
}
