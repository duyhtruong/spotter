import React from 'react';

function Card(props) {  
        return(
            <div className={`card card__group--position ${props.styleName}`}>
                {props.children}
            </div>
        )
    
}

export default Card;