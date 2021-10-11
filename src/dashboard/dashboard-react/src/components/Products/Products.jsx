function Products({ products }) {
    return(
      <tbody id="myTable">
        {products.map(product => (
          <tr key={product.id}>
          <td>{product.id}</td>
          <td><img src={product.image} height="100px" width="100px" alt=""/></td>
          <td>{product.city}</td>
          <td>{product.description}</td>
          <td>{product.category}</td>
          <td>{product.tipo}</td>
          <td>{product.disponible}</td>
          <td>{product.price}</td>
          <td><a href={product.detail}><button>Detalle</button></a></td>
        </tr>
        ))}
          </tbody>
    )
  }
  
  export default Products;