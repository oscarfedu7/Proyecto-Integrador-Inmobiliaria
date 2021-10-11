
import React,{Component} from 'react';
import "./UserDetail.css";

 

function UserDetail(props){
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
                    <img src={props.image} width="200px" height="300px" alt=""/>
                </div>
            </div>
            <div id="part2">
 
                <div id="amplia-descr">
                    <h3>Nombre: {props.firstName+" "+props.lastName}</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Email: {props.email}</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Ciudad: {props.city}</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Dirección: {props.address}</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Código postal: {props.codigo_postal}</h3>
                </div>
            </div>

        </div>
</div>

);
}


export default UserDetail;