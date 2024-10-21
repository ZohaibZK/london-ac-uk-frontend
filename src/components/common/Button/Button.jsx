import React from "react"
import './button.scss'

const CustomButton = ({
    title,
    className,
    handleClick,
    type,
    disabled,
}) => {
    return (
        <button id="custom-btn" disabled={disabled} onClick={handleClick} className={className} type={type}>
            <span className="text">{title}</span>
        </button>
    )
}

export default CustomButton;
