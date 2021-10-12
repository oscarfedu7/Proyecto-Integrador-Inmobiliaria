import React, {Component} from 'react';
import Products from '../Products/Products';

class Table extends Component{
  constructor(props){
    super(props);
    this.state={
      products: [],
      productsTam: "" 
    };
  }
  apiCall(url, consecuencia){
    fetch(url)
      .then(res => res.json())
      .then(data => {
            this.setState(
              {
                products: data.products,
                productsTam: data.cont
              } 
            )
      })
      .catch(error => console.log(error));
  }

  componentDidMount(){
    console.log("Me monté");
    this.apiCall("https://grupo8-bits.herokuapp.com/api/products")
  }

  componentDidUpdate(){
    console.log("Me actualicé");
  }
  render(){
    console.log("Estoy renderizando");
    return (
      <div className="container mt-3">



    <h2>Productos</h2>
    <p>Type something in the input field to search the table for first names, last names or emails:</p>  
    <input className="form-control" id="myInput" type="text" placeholder="Search.."/>
    <br/>
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Imagen</th>
          <th>Ciudad</th>
          <th>Descripción</th>
          <th>Categoría</th>
          <th>Tipo</th>
          <th>Disponible</th>
          <th>Precio</th>
          <th>Detalle:</th>
        </tr>
      </thead>
      <Products products={this.state.products} />
    </table>
    
  
      </div>   
    ) 
  }
}
export default Table;



