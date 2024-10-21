import React from 'react';
import './inputField.scss'

export const InputField = ({
    placeholder = '',
    isDisabled = false,
    isReadOnly = false,
    isClearable = false,
    className,
    value,
    onChange,
    classNamePrefix = '',
    name,
    focused = false,
    required,
    type = ''
}) => {

    return (
        <input
            type={type}
            autoComplete='nope'
            value={value}
            placeholder={placeholder}
            disabled={isDisabled || isReadOnly}
            onChange={e => onChange(e)}
            isClearable={isClearable}
            className={className}
            classNamePrefix={classNamePrefix}
            name={name}
            autoFocus={focused}
            required={required}
        />
    );
};
