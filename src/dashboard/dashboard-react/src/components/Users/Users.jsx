function Users({ users }) {
    return(
      <tbody id="myTable">
        {users.map(user => (
          <tr key={user.id}>
          <td>{user.id}</td>
          <td><img src={user.image} height="100px" width="100px" alt=""/></td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.city}</td>
          <td>{user.address}</td>
          <td>{user.codigo_postal}</td>
        </tr>
        ))}
          </tbody>
    )
  }
  
  export default Users;