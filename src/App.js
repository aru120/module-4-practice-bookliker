import React from "react";
import {
  Container,
  Header,
  Menu,
  Button,
  List,
  Image
} from "semantic-ui-react";
import BookTitle from './Containers/BookTitle'

class App extends React.Component {

  state={
    books: [],
    selectedBook: {},
    users: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/books")
    .then(r=>r.json())
    .then(data => this.setState({books: data},()=>this.setSelectedBook()))
  }


  setSelectedBook = () =>{
    this.setState({selectedBook: this.state.books[0]}) 
  }

  getBookInfo = (bookObj) =>{
    this.setState({selectedBook: bookObj})
  }

  renderBookUsers =()=>{
   let userArray =  this.state.selectedBook.users.map( user =>  user )
    this.setState({users: userArray})
  }

  setBookUsers =()=>{
   return this.state.users.map(user => <p key={user.id}>{user.username}</p>)
    
  }

  render(){
    
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Header</Menu.Item>
        </Menu>
        <main>
          <Menu vertical inverted>
            <Menu.Item as={"a"} onClick={this.renderBookUsers}>
              <BookTitle api={this.state.books} getBookInfo={this.getBookInfo}/> 
            </Menu.Item>
          </Menu>
          <Container text>
            <Header>{this.state.selectedBook.title}</Header>
            <Image
              src={this.state.selectedBook.img_url}
              size="small"
            />
            <p>{this.state.selectedBook.description}</p>
            <Button
              color="red"
              content="Like"
              icon="heart"
              label={{
                basic: true,
                color: "red",
                pointing: "left",
                content: "2,048"
              }}
            />
            <Header>Liked by</Header>
            <List>
              {this.setBookUsers()}
            </List>
          </Container>
        </main>
      </div>
    );
  }
}

export default App;
