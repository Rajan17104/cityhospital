import React from 'react';
import { BaseInput } from './input.style';

function Input({ type, name, value, onBlur, onChange, placeholder}) {
    return (
            <BaseInput
                type={type}
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={placeholder}
            />

    );
}

export default Input;