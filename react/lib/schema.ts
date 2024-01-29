import { z } from 'zod';
import validator from 'validator';

export const ApplyFormDataSchema = z.object({
  first_name: z.string().nonempty('First name is required.'),
  middle_name: z.string(),
  last_name: z.string().nonempty('Last name is required.'),
  email: z.string().nonempty('Email is required.').email("This is not a valid email."),
  phone: z.string().nonempty('Phone is required.').refine(validator.isMobilePhone, { message: 'This is not a valid phone number.' }),
  available: z.string().nonempty('A date is required when you can start this job.')
});
