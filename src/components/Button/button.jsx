// Button.js
import React from "react";
import "./button.scss";
import { Button as AntButton } from 'antd';

function Button({ text, onClick }) {
    return (
        <AntButton
            type="link"
            className="button"
            onClick={onClick}
        >
            {text}
        </AntButton>
    );
}

export default (Button);
