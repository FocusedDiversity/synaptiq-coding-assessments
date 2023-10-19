import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Popover } from '../Popover';

test('Popover renders and handles toggle', async () => {
    const activatorText = 'Click Me';
    const contentText = 'Popover Content';

    const onToggle = jest.fn();

    const { container } = render(
        <Popover activator={activatorText} content={contentText} active={false} onToggle={onToggle} />
    );

    const activatorElement = container.querySelector('.activator');
    const contentElement = container.querySelector('.content');

    expect(activatorElement).toBeTruthy();
    expect(contentElement).toBeNull();

    fireEvent.click(activatorElement!);

    expect(onToggle).toHaveBeenCalledTimes(1);

    setTimeout(() => {
        const activeContentElement = container.querySelector('.content');
        expect(activeContentElement).toBeTruthy();

        fireEvent.click(contentElement!);

        expect(onToggle).toHaveBeenCalledTimes(2);
    }, 500);
});
