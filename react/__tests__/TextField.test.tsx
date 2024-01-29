import '@testing-library/jest-dom';
import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { render, screen } from '@/utils/testing';
import userEvent from '@testing-library/user-event';

import TextField from '@/components/common/form/fields/TextField';

jest.mock('react-hook-form');

const mockUseFormContext = useFormContext as jest.Mock;
const mockUseController = useController as jest.Mock;

mockUseFormContext.mockReturnValue({
  control: jest.fn(),
  setValue: jest.fn(),
  formState: { errors: { test_required: { message: 'This field is required' } }, isDirty: true, isSubmitting: false, isValid: true }
});

mockUseController.mockReturnValue({
  field: { onChange: jest.fn() }
});

describe('<TextField />', () => {
  const Component = () => <TextField fieldName='test' label='Test' />;
  const RequiredComponent = () => <TextField required={true} fieldName='test_required' label='Test required' />;

  test('should render properly', () => {
    render(<Component />);
    const input = screen.getByRole<HTMLInputElement>('input', { name: /test/i });
    expect(input).toBeInTheDocument();
  });

  test('should show error if required and value is empty', async () => {
    const user = userEvent.setup();
    render(<RequiredComponent />);
    const input = screen.getByRole<HTMLInputElement>('input', { name: /test required/i });
    await user.type(input, 'test');
    // verify field is invalid
    expect(input).toBeInvalid();
    // verify error message is shown
    expect(screen.getByText('This field is required')).toBeInTheDocument();;
  });

});