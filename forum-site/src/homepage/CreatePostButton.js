import React from 'react';
import './CreatePostButton.css';

const STYLES = [
    'create-post-btn--primary',
    'create-post-btn--outline'
]

const SIZES = [
    'create-post-btn--medium',
    'create-post-btn--large'
]

export const CreatePostButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`create-post-btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{children}</button>
    )
}