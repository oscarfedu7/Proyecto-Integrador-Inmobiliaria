import React, {Component} from 'react';
import Users from '../Users/Users';

class Table extends Component{
  constructor(props){
    super(props);
    this.state={
      users: [],
      usersTam: "" 
    };
  }
  apiCall(url, consecuencia){
    fetch(url)
      .then(res => res.json())
      .then(data => {
            console.log(data);
            this.setState(
              {
                users: data.users,
                usersTam: data.cont
              } 
            )
      })
      .catch(error => console.log(error));
  }

  componentDidMount(){
    console.log("Me monté");
    this.apiCall("http://localhost:3100/api/users", this.mostrarUsers)
  }

  componentDidUpdate(){
    console.log("Me actualicé");
  }
  render(){
    console.log("Estoy renderizando");
    return (
      <div className="container mt-3">



    <h2>Usuarios</h2>
    <p>Type something in the input field to search the table for first names, last names or emails:</p>  
    <input className="form-control" id="myInput" type="text" placeholder="Search.."/>
    <br/>
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Image</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>City</th>
          <th>Address</th>
          <th>Código-postal</th>
        </tr>
      </thead>
      <Users users={this.state.users} />
    </table>
    
  
      </div>   
    ) 
  }
}
export default Table;



