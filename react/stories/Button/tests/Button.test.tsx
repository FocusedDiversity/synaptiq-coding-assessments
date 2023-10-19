import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

test('Button renders with children', () => {
    const { container } = render(<Button>Click Me</Button>);
    const buttonElement = container.querySelector('button');
    expect(buttonElement?.textContent).toBe('Click Me');
});

test('Button has the button-styles class', () => {
    const { container } = render(<Button>Click Me</Button>);
    const buttonElement = container.querySelector('.button-styles');
    expect(buttonElement).not.toBeNull();
});

test('Button click event works', () => {
    const { container } = render(<Button>Click Me</Button>);
    const buttonElement = container.querySelector('button');
    const mockClick = jest.fn();
    buttonElement?.addEventListener('click', mockClick);

    fireEvent.click(buttonElement!);

    expect(mockClick).toHaveBeenCalledTimes(1);
});
