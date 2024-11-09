
import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className='hmain'>
      <div className='h1'></div>
      <div className='row h2'>
        <div className='col hc1'><a href='#Home'>Intro</a></div>
        <div className='col hc1'><a href='#Resume'>Resume</a></div>
        <div className='col hc1'><a href='#Acadmecis'>Acadmecis</a></div>
        <div className='col hc1'><a href='#Project'>Project</a></div>
        <div className='col hc1'><a href='#Contact'>Contact</a></div>
      </div>
      <div className='h1'></div>
    </div>
  )
}