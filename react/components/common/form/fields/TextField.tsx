'use client'

import React, { useState, useEffect } from 'react';
import { useWatch, useFormContext, useController } from 'react-hook-form';

interface Props {
  id?: string;
  label?: string;
  required?: boolean;
  fieldName: string;
  defaultValue?: Date;
}

function TextFieldWrapper({
  label,
  required,
  fieldName,
  defaultValue = new Date(),
  ...rest
}: Props, ref: React.ForwardedRef<HTMLInputElement>) {
  const value = useWatch({ name: fieldName });
  const methods = useFormContext();

  const controller = useController({
    name: fieldName,
    control: methods.control,
  });

  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 text-sm font-light mb-2" htmlFor={fieldName}>
        {label} {required && <span className="required text-primary">*</span>}
      </label>}
      <input
        ref={ref}
        aria-label={label || undefined}
        role="input"
        required={required ? true : false}
        id={fieldName}
        name={fieldName}
        type="text"
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-secondary focus:outline-none focus:shadow-outline"
        value={value || ''}
        onChange={controller.field.onChange}
        onBlur={controller.field.onBlur}
        autoComplete="off"
        {...rest} />
      {methods.formState.errors[fieldName]?.message && (
        <p className="text-xs text-red-400 mt-2">{methods.formState.errors[fieldName]?.message as string}</p>
      )}
    </div>
  )
}

export default React.forwardRef<HTMLInputElement, Props>(TextFieldWrapper);
