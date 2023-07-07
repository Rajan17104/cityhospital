import React from 'react';
import { BaseInput } from './input.style';

function Input({ children }) {
    return (
        <BaseInput>
            {children}
        </BaseInput>
    );
}

export default Input;