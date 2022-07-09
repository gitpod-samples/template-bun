import React from 'react'
import "assets/css/App.css"
import logo from "./logo.svg"

export default function Home() {
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
