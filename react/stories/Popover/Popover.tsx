import React, { ReactNode } from 'react';
import './popover.css';

export interface PopoverProps {
    activator: ReactNode;
    content: ReactNode;
    active: boolean;
    onToggle: () => void;
}

export function Popover({ activator, content, active, onToggle }: PopoverProps) {
    return (
        <div className={`popover ${active ? 'active' : ''}`}>
            <div className="activator" onClick={onToggle}>
                {activator}
            </div>
            {active && <div className="content">{content}</div>}
        </div>
    );
}
