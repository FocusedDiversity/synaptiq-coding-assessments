'use client'

import React, { useState, useEffect } from 'react';
import { useWatch, useFormContext, useController } from 'react-hook-form';
import { Card, Popover, DatePicker, DatePickerProps } from '@shopify/polaris';
import { dateWithoutTimezone } from '@/utils';

interface Props {
  id?: string;
  label?: string;
  required?: boolean;
  fieldName: string;
  defaultValue?: Date;
  options?: Partial<DatePickerProps>;
}

type DateType = {
  month: number;
  year: number;
}

function DatePickerWrapper({
  id,
  label,
  required,
  fieldName,
  defaultValue = new Date(),
  options = {},
  ...rest
}: Props, ref: React.ForwardedRef<HTMLInputElement>) {
  const value = useWatch({ name: fieldName });
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(value || defaultValue);
  const [{ month, year }, setDate] = useState<DateType>({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  });

  const formattedValue = dateWithoutTimezone(selectedDate).slice(0, 10);

  const methods = useFormContext();

  const controller = useController({
    name: fieldName,
    control: methods.control,
  });

  function handleOnClose() {
    setVisible(false);
  }

  function handleMonthChange(month: DateType['month'], year: DateType['year']) {
    setDate({ month, year });
  }

  function handleDateSelection({ end: newSelectedDate }: { end: Date }) {
    const year = newSelectedDate.getFullYear();
    const monnth = Number(newSelectedDate.getMonth().toString().padStart(2, '0'))
    const day = Number(newSelectedDate.getDate().toString().padStart(2, '0'));
    setSelectedDate(new Date(year, monnth, day));
    setVisible(false);
  }

  useEffect(() => {
    if (selectedDate) {
      methods.setValue(fieldName, dateWithoutTimezone(selectedDate));
      setDate({
        month: selectedDate.getMonth(),
        year: selectedDate.getFullYear(),
      });
    }
  }, [selectedDate, fieldName, methods], );

  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 text-sm font-light mb-2" htmlFor={fieldName}>
        {label} {required && <span className="required text-primary">*</span>}
      </label>}
      <Popover
        active={visible}
        autofocusTarget="none"
        preferredAlignment="left"
        fullWidth
        preferInputActivator={false}
        preferredPosition="below"
        preventCloseOnChildOverlayClick
        onClose={handleOnClose}
        activator={
          <input
            ref={ref}
            aria-label={label || undefined}
            role="input"
            required={required ? true : false}
            id={fieldName}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-secondary focus:outline-none focus:shadow-outline"
            value={formattedValue}
            name={fieldName}
            type="text"
            onFocus={() => setVisible(true)}
            onChange={controller.field.onChange}
            onBlur={controller.field.onBlur}
            autoComplete="off"
            {...rest} />
        }
      >
        <Card>
          <DatePicker
            month={month}
            year={year}
            selected={selectedDate}
            onMonthChange={handleMonthChange}
            onChange={handleDateSelection}
            {...options}
          />
        </Card>
      </Popover>
      {methods.formState.errors[fieldName]?.message && (
        <p className="text-xs text-red-400 mt-2">{methods.formState.errors[fieldName]?.message as string}</p>
      )}
    </div>
  )
}

export default React.forwardRef<HTMLInputElement, Props>(DatePickerWrapper);