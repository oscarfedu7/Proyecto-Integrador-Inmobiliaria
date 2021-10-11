import React from 'react';
import "./Card.css";

function Card(props) {
    const color =props.color;
    const estiloColor ="card border-left-"+color+" shadow h-100 py-2";
    const estiloText ="text-xs font-weight-bold text-"+color+" text-uppercase mb-1";
  return (
    <div className="col-xl-3 col-md-6 mb-4">
        
        <div className={estiloColor}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className={estiloText}>
                            {props.type}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.tam}</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300">
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
  }
  Card.defaultProps={
      color:"primary",
      type: "Cantidad total",
      tam: 10
      
  }

export default Card;