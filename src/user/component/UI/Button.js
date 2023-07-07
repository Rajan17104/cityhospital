import React from 'react';
import { BaseButton, outlinebutton, primarybutton, secondarybutton } from './button.style';


function Button({ children, type, btndisable=false }) {
    console.log(type);
    const checktype = () => {
        switch (type) {
            case 'primary':
                return primarybutton;
            case 'secondary':
                return secondarybutton;
            case 'outline':
                return outlinebutton;
            default :
                return primarybutton;

        }

    }

    const Btntype = checktype();

    return (
        <Btntype disabled={btndisable}>
            {children}
        </Btntype>


    );
}

export default Button;