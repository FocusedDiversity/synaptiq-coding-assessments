import React from 'react';
import './optionlist.css';

export interface OptionListProps {
    options: Array<{ value: string; label: string }>;
    selected: string;
    onChange: (value: string) => void;
}

export function OptionList({ options, selected, onChange }: OptionListProps) {
    return (
        <ul className="option-list">
            {options.map((option) => (
                <li
                    key={option.value}
                    className={`option ${option.value === selected ? 'selected' : ''}`}
                    onClick={() => onChange(option.value)}
                >
                    {option.label}
                    {option.value === selected && (
                        <span className="checkmark">&#10003;</span>
                    )}
                </li>
            ))}
        </ul>
    );
}