import React from 'react';
import { styled } from 'styled-components';
 
     const BaseButton = styled.button`
    // // background: #000;
     
     border: 0;
     padding: 10px 35px;

     transition: 0.4s;
     border-radius: 50px;
     margin: 10px;
    
    
     `;

     export const primarybutton = styled(BaseButton)`
     background: #FF6337;
     color: #fff;

     &:hover {
        background: #1c84e3;
    }
     `;

     export const secondarybutton = styled(BaseButton)`
     background: ${props => props.disabled ? 'gray' : '#ff2552' };
     color: #fdd454;

     &:hover {
        background: ${props => props.disabled ? 'gray' : "#fff111"};
    }
     `;
    
     export const outlinebutton = styled(BaseButton)`
    //  background: ;
     color: #fff;
     border: 2px solid  #000;

     &:hover {
        background: #000
    }
     `;

