import React from 'react'


class Book extends React.Component{

    localGetBookInfo = () =>{
        this.props.getBookInfo(this.props.bookObj)
    }

    render(){
        return(
            <p onClick={this.localGetBookInfo}>{this.props.bookObj.title}</p>
        )
    }

}

export default Book