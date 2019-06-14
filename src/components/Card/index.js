import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            
            <span onClick={() => props.mixImages(props.id)} className="mix">
                𝘅
      </span>
        </div>
    );
}

export default Card;
