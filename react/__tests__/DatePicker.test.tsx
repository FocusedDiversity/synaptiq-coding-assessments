import '@testing-library/jest-dom';
import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { render, fireEvent, screen, waitFor } from '@/utils/testing';
import userEvent from '@testing-library/user-event';

import DatePicker from '@/components/common/form/fields/DatePicker';

import { dateWithoutTimezone } from '@/utils';

enum SELECTORS {
  PORTAL = '#PolarisPortalsContainer',
  INPUT = '#test',
  POPOVER = '.Polaris-PositionedOverlay',
  DAYS = '.Polaris-DatePicker__Day:not(.Polaris-DatePicker__Day--disabled)',
  TODAY = 'Polaris-DatePicker__Day--today',
  NEXTBUTTON = '.Polaris-DatePicker__Header .Polaris-Button:last-child',
  PREVBUTTON = '.Polaris-DatePicker__Header .Polaris-Button:first-child'
}

jest.mock('react-hook-form');

const mockUseFormContext = useFormContext as jest.Mock;
const mockUseController = useController as jest.Mock;

mockUseFormContext.mockReturnValue({
  control: jest.fn(),
  setValue: jest.fn(),
  formState: { errors: {}, isDirty: true, isSubmitting: false, isValid: true }
});

mockUseController.mockReturnValue({
  field: { onChange: jest.fn() }
});

describe('<DatePicker />', () => {
  const Component = (props: any) => <DatePicker fieldName='test' label='Test' {...props} />;

  test('should render properly', () => {
    render(<Component />);
    const input = screen.getByRole<HTMLInputElement>('input');
    expect(input).toBeInTheDocument();
  });

  test('should show date pricker on focus', async () => {
    render(<Component />);
    const portal = document.querySelector(SELECTORS.PORTAL);
    const input = screen.getByRole<HTMLInputElement>('input');

    // focus on date input field
    fireEvent.focus(input);

    // verify popover is visible
    expect(portal?.querySelector(SELECTORS.POPOVER)).toBeInTheDocument();
  });

  test('should hide date picker on blur', async () => {
    render(<Component />);
    const portal = document.querySelector(SELECTORS.PORTAL);
    const input = screen.getByRole<HTMLInputElement>('input');

    // blur on date input field
    fireEvent.blur(input);

    // verify popover is hidden
    expect(portal?.querySelector(SELECTORS.POPOVER)).toBeNull();
  });

  test('should use default value if provided', async () => {
    const defaultValue = new Date(2024, 0, 31); // should default to January 31, 2024
    render(<Component defaultValue={defaultValue} />);
    const input = screen.getByRole<HTMLInputElement>('input', { name: /test/i });
    expect(input.getAttribute('value')).toBe(dateWithoutTimezone(defaultValue).slice(0, 10));
  });

  test('should be able to select the next day and validate', async () => {
    const user = userEvent.setup();
    const defaultValue = new Date(2024, 0, 28);  // January 28th, 2024
    const newValue = new Date(2024, 0, 29);  // January 29th, 2024
    render(<Component defaultValue={defaultValue} />);
    const input = screen.getByRole<HTMLInputElement>('input', { name: /test/i });
    const portal = document.querySelector(SELECTORS.PORTAL);
    let days;

    const getDayButtons = () => {
      const popover = portal?.querySelector(SELECTORS.POPOVER);
      return Array.prototype.slice.call(popover?.querySelectorAll(SELECTORS.DAYS));
    };

    // focus on date input field
    fireEvent.focus(input);
    // get current days
    days = getDayButtons();
    // click the next day in the month (tomorrow)
    await user.click(days[days.findIndex(elm => elm.className.includes(SELECTORS.TODAY)) + 1]);

    // verify updated input value
    expect(input.getAttribute('value')).toEqual(dateWithoutTimezone(newValue).slice(0, 10));
  });

  test('should be able to click to the next month and select a date', async () => {
    const user = userEvent.setup();
    const defaultValue = new Date(2024, 0, 31);  // January 31st, 2024
    const newValue = new Date(2024, 1, 1);  // February 1st, 2024
    render(<Component defaultValue={defaultValue} />);
    const input = screen.getByRole<HTMLInputElement>('input', { name: /test/i });
    const portal = document.querySelector(SELECTORS.PORTAL);
    let days;

    const getDayButtons = () => {
      const popover = portal?.querySelector(SELECTORS.POPOVER);
      return Array.prototype.slice.call(popover?.querySelectorAll(SELECTORS.DAYS));
    };

    const getNextButton = () => {
      const popover = portal?.querySelector(SELECTORS.POPOVER);
      return popover?.querySelector(SELECTORS.NEXTBUTTON) as Element;
    }

    // focus on date input field
    fireEvent.focus(input);
    // get current days
    days = getDayButtons();
    // click the next month button
    await user.click(getNextButton());
    days = getDayButtons();
    // click the first day in next month
    await user.click(days[0]);

    // verify updated input value
    expect(input.getAttribute('value')).toEqual(dateWithoutTimezone(newValue).slice(0, 10));
  });

  test('should be able to click to the previous month and select a date', async () => {
    const user = userEvent.setup();
    const defaultValue = new Date(2024, 1, 1);  // February 1st, 2024
    const newValue = new Date(2024, 0, 31);  // January 31st, 2024
    render(<Component defaultValue={defaultValue} />);
    const input = screen.getByRole<HTMLInputElement>('input', { name: /test/i });
    const portal = document.querySelector(SELECTORS.PORTAL);
    let days;

    const getDayButtons = () => {
      const popover = portal?.querySelector(SELECTORS.POPOVER);
      return Array.prototype.slice.call(popover?.querySelectorAll(SELECTORS.DAYS));
    };

    const getPrevButton = () => {
      const popover = portal?.querySelector(SELECTORS.POPOVER);
      return popover?.querySelector(SELECTORS.PREVBUTTON) as Element;
    }

    // focus on date input field
    fireEvent.focus(input);
    // get current days
    days = getDayButtons();
    // click the previous month button
    await user.click(getPrevButton());
    days = getDayButtons();
    // click the last day in next month
    await user.click(days[days.length - 1]);

    // verify updated input value
    expect(input.getAttribute('value')).toEqual(dateWithoutTimezone(newValue).slice(0, 10));
  });

});