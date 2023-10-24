import React from 'react'
import FloatingIcons from '../../components/FloatingIcons/FloatingIcons'
import "./Book.css"
import BookForm from '../../components/BookForm/BookForm'
const Book = () => {
  return (
    <>
          <section>
    <FloatingIcons/>
    </section>
    <div className='about-header-wrapper'>
    <h1 className="about-heading">BOOK YOUR SLOTS</h1>
    </div>
    <div className="container-xxl book-wrapper">
      <div className="book-title-wrapper">
      <h3>Welcome to Gamer's Burnout</h3>
      
      </div>
      <section><BookForm/></section>
    </div>
    
    </>
  )
}

export default Book
