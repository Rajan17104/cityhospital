import React from 'react';
import { CardData } from './card.style';

function Card({...rest}) {
    return (
        <div>
            <CardData {...rest} />
        </div>
    );
}

export default Card;