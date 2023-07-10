import React from 'react';
import { BaseInput, InputError } from './input.style';

function Input({ errorText, ...rest }) {
    return (
        <>
            <BaseInput  className="form-control" errorText={errorText} {...rest} />

            <InputError errorText={errorText}>
                {errorText}
            </InputError>
        </>

    );
}

export default Input;