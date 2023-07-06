import React from 'react';
import Styled from 'styled-components'

function Custombutton({data}) {

    const Button = Styled.button`
    background: #000;
    // background: #FF6337;
    border: 0;
    padding: 10px 35px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
    margin: 10px;

    &:hover {
        background: #1c84e3;
    }
    `
    return (
        <Button>
            {data}
        </Button>
        
    );
}

export default Custombutton;