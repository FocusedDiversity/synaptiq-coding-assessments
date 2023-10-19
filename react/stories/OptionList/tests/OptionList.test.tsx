import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OptionList } from '../OptionList';

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

test('OptionList renders options and handles clicks', () => {
    const selected = 'option2';
    const onChange = jest.fn();

    const { container } = render(
        <OptionList options={options} selected={selected} onChange={onChange} />
    );

    const optionElements = container.querySelectorAll('.option');

    expect(optionElements).toHaveLength(options.length);

    optionElements.forEach((option, index) => {
        const optionValue = options[index].value;
        const optionLabel = options[index].label;

        expect(option.textContent).toContain(optionLabel);

        if (optionValue === selected) {
            expect(option.className).toContain('selected');
            expect(option.querySelector('.checkmark')).not.toBeNull();
        } else {
            expect(option.className).not.toContain('selected');
            expect(option.querySelector('.checkmark')).toBeNull();
        }

        fireEvent.click(option);
        expect(onChange).toHaveBeenCalledWith(optionValue);
    });
});
