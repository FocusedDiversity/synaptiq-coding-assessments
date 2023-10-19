import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import './button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button {...props} className="button button-styles">
            {children}
        </button>
    );
}
