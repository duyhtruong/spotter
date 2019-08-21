import React from 'react';

function Card(props) {  
        return(
            <div className='card card__group--position'>
                Card
                {props.children}
            </div>
        )
    
}

export default Card;