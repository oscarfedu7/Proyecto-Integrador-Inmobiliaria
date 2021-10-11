
import React,{Component} from 'react';
import "./UserDetail.css";

 

function UserDetail(){
  return (
    <div>
        <div className="detalleTitulo">
        <h2 id="titulo-det">Detalle del Usuario </h2>
        </div>
        <br/>
        <br/>

        <div id="general">
            <div id="part1">
                <div id="imagen-casa">
                    <img src="/img/products.svg" width="200px" height="200px" alt=""/>
                </div>
            </div>
            <div id="part2">
 
                <div id="amplia-descr">
                    <h3>Nombre: Oscar Fernández Durán</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Ciudad: Morelia</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Dirección: calle aguas calientes #234</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Código postal: 58240</h3>
                </div>
                <div id="precio">
                    <h4>no sé que más</h4>
                </div>
            </div>

        </div>
</div>

);
}


export default UserDetail;