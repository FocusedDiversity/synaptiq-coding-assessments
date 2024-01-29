'use server'

import { z } from 'zod';
import { ApplyFormDataSchema } from '@/lib/schema';

type Inputs = z.infer<typeof ApplyFormDataSchema>;

export async function applyForJob(data: Inputs) {
  const result = ApplyFormDataSchema.safeParse(data)
  if (result.success) {
    return { success: true, data: result.data }
  }
  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}