import React from 'react';
import { Title } from './subtitel.style';

function Subtitel({children}) {


    return (
        <Title>
            {children}
        </Title>
    );
}

export default Subtitel;