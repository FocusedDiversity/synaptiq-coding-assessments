import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@/utils/testing';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import userEvent from '@testing-library/user-event';

import ApplyForm, { Inputs } from '@/components/forms/ApplyForm';
import { ApplyFormDataSchema } from '@/lib/schema';
import { applyForJob } from '@/app/apply/[id]/actions';
import { dateWithoutTimezone } from '@/utils';

import jobs from '@/constants/jobs';

enum SELECTORS {
  PORTAL = '#PolarisPortalsContainer',
  INPUT = '#test',
  POPOVER = '.Polaris-PositionedOverlay',
  DAYS = '.Polaris-DatePicker__Day:not(.Polaris-DatePicker__Day--disabled)',
  SELECTED = 'Polaris-DatePicker__Day--selected',
  NEXTBUTTON = '.Polaris-DatePicker__Header .Polaris-Button:last-child',
  PREVBUTTON = '.Polaris-DatePicker__Header .Polaris-Button:first-child'
}

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

jest.mock('@/app/apply/[id]/actions', () => ({
  applyForJob: jest.fn().mockImplementation(function (result) {
    return new Promise((resolve, reject) => {
      resolve({ success: result.sucess, data: result.data });
      reject({ success: false, error: result.error.format() });
    });
  })
}));

describe('<ApplyForm />', () => {
  const Component = (props: any) => <ApplyForm job={jobs[0].value} {...props} />;

  it('should render the basic fields', () => {
    render(<Component />);
    expect(screen.getByRole('textbox', { name: /First Name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Middle Name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Last Name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Phone/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Date available to work/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Apply/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Back to home/i })).toBeInTheDocument();
  });

  it('should validate form fields', async () => {
    const user = userEvent.setup();
    render(<Component />);
    await user.type(screen.getByRole('textbox', { name: /Email/i }), 'invalid_email_address');
    await user.type(screen.getByRole('textbox', { name: /Phone/i }), '123');
    await user.click(screen.getByRole('button', { name: /Apply/i }));
    expect(screen.getByText('This is not a valid email.')).toBeInTheDocument();
    expect(screen.getByText('This is not a valid phone number.')).toBeInTheDocument();
  });

  it('should submit correct form data', async () => {
    const user = userEvent.setup();
    render(<Component />);
    const portal = document.querySelector(SELECTORS.PORTAL);
    const today = new Date();
    let selectedDate;
    let days;

    const getDayButtons = () => {
      const popover = portal?.querySelector(SELECTORS.POPOVER);
      return Array.prototype.slice.call(popover?.querySelectorAll(SELECTORS.DAYS));
    };

    const getNextButton = () => {
      const popover = portal?.querySelector(SELECTORS.POPOVER);
      return popover?.querySelector(SELECTORS.NEXTBUTTON) as Element;
    }

    // populate first name field
    await user.type(screen.getByRole('textbox', { name: /First Name/i }), 'John');
    // populate middle name field
    await user.type(screen.getByRole('textbox', { name: /Middle Name/i }), 'Jacob');
    // populate last name field
    await user.type(screen.getByRole('textbox', { name: /Last Name/i }), 'Smith');
    // populate email field
    await user.type(screen.getByRole('textbox', { name: /Email/i }), 'johnsmith@test.com');
     // populate phone field
    await user.type(screen.getByRole('textbox', { name: /Phone/i }), '1233456789');

    // focus on date input field
    fireEvent.focus(screen.getByRole('textbox', { name: /Available/i }));
    // get current days
    days = getDayButtons();
    if (today.getDate() < days.length) {
      // click the next day in the month (tomorrow)
      await user.click(days[days.findIndex(elm => elm.className.includes(SELECTORS.SELECTED)) + 1]);
      selectedDate = screen.getByRole('textbox', { name: /Available/i }).getAttribute('value');
    } else {
      // click the next month button
      await user.click(getNextButton());
      // get current days
      days = getDayButtons();
      // click the first day in next month
      await user.click(days[0]);
      selectedDate = screen.getByRole('textbox', { name: /Available/i }).getAttribute('value');
    }

    await user.click(screen.getByRole('button', { name: /Apply/i }));
    expect(applyForJob).toHaveBeenCalledWith({
      first_name: 'John',
      middle_name: 'Jacob',
      last_name: 'Smith',
      email: 'johnsmith@test.com',
      phone: '1233456789',
      available: selectedDate
    });
  });

});