import React from 'react';
import './fieldLabel.scss';

export const FieldLabel = (props) => {

    return (
        <label
            for={props?.labelFor ? props?.labelFor : ''}
        >
            {props?.title}
            {props?.children}
        </label>
    );
};
