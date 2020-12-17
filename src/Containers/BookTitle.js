import React from 'react'
import Book from '../Components/Book'


const BookTitle = (props) =>{

   function renderTitle() {
         return props.api.map(book => <Book  key={book.id} bookObj={book} getBookInfo={props.getBookInfo}/>)
    }

return(
    <>
  {renderTitle()}
  </>
)

}

export default BookTitle