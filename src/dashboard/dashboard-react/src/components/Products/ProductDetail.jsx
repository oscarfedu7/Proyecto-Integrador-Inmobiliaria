import React,{Component} from 'react';
import "./ProductDetail.css";

 

function ProductDetail(props){
    let disp="Disponible";
    if(props.disponible!=1){
        disp = "No disponible";
    }
  return (
    <div>
        <div className="detalleTitulo">
        <h2 id="titulo-det">Detalle del Producto </h2>
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
                    <h3>Ciudad: {props.city}</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Descripción: {props.description}</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Categoría: {props.category}</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Tipo: {props.tipo}</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Disponible: {disp}</h3>
                </div>
                <div id="amplia-descr">
                    <h3>Precio: ${props.price}</h3>
                </div>
            </div>

        </div>
</div>

);
}


export default ProductDetail;