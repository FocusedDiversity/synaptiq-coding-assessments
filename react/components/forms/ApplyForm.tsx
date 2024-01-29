'use client'

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ApplyFormDataSchema } from '@/lib/schema';
import { applyForJob } from '@/app/apply/[id]/actions';
import jobs, { JobType } from '@/constants/jobs';

import TextField from '@/components/common/form/fields/TextField';
import DatePicker from '@/components/common/form/fields/DatePicker';

interface Props {
  job: string
}

type Inputs = z.infer<typeof ApplyFormDataSchema>;

export default function ApplyForm({ job }: Props) {
  const [data, setData] = useState<Inputs>();
  const router = useRouter();
  const selectedJob = jobs.find((j: JobType) => j.value === job);

  const form = useForm<Inputs>({
    mode: 'onBlur',
    resolver: zodResolver(ApplyFormDataSchema),
    defaultValues: {
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      phone: '',
      available: ''
    }
  });
  const {
    handleSubmit,
    reset,
    formState: { isDirty, isValid }
  } = form;

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await applyForJob(data);
    if (!result) {
      console.log('Something went wrong');
      return;
    }
    if (result.error) {
      console.log(result.error);
      return;
    }
    reset();
    setData(result.data);
  };

  useEffect(() => {
    if (!selectedJob) router.push('/')
  }, [router, selectedJob]);

  return !selectedJob ? <header>
    <p className="mb-4 text-center">Please select a job before applying.</p>
    <p className="mb-0 text-center text-sm">Redirecting back to home...</p>
  </header> : !data ? (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(processForm)}>
        <header>
          <p className="mb-4 text-sm">Your are currently applying for the <a href={selectedJob?.url} target="_blank">{selectedJob?.label}</a> position.</p>
          <p className="mb-4 text-xs">Please provide some basic information about yourself.</p>
        </header>
        <section>
          <TextField required fieldName="first_name" label="First Name" />

          <TextField fieldName="middle_name" label="Middle Name" />

          <TextField required fieldName="last_name" label="Last Name" />

          <TextField required fieldName="email" label="Email" />

          <TextField required fieldName="phone" label="Phone" />

          <DatePicker required fieldName="available" label="Date available to work" options={{
            disableDatesBefore: new Date()
          }} />
        </section>
        <footer className="flex items-end justify-between">
          <button disabled={!isDirty || !isValid} className={`block ${!isDirty || !isValid ? 'bg-gray-400' : 'bg-primary hover:bg-primaryHover'} text-white hover:text-white transition py-2 px-4 rounded focus:border-secondary focus:outline-none focus:shadow-outline`} type="submit">
            Apply
          </button>
          <Link role="button" className="inline-block align-baseline font-bold text-sm" href="/">
            Back to home
          </Link>
        </footer>
      </form>

    </FormProvider>) : (<>
      <h1 className="mb-4 text-xl text-secondary text-center">Congrats!</h1>
      <p className="mb-4 text-sm">You have successfully applied for the <a href={selectedJob?.url} target="_blank">{selectedJob?.label}</a> position.  Please allow for 2-3 business days for us to get back you.</p>
      <p className="mb-4 text-sm">Here is a summary of what you have provided:</p>
      <div className="rounded p-3 border border-light bg-gray-100 mb-4">
      <p className="mb-2 text-xs">Your name is <strong className="text-secondary">{data.first_name} {data.middle_name} {data.last_name}</strong>.</p>
      <p className="mb-2 text-xs">Your provided an email address of <strong className="text-secondary">{data.email}</strong> and a phone number of <strong className="text-secondary">{data.phone}</strong>.</p>
      <p className="mb-0 text-xs">You are available to work in this position starting on <strong className="text-secondary">{new Date(data.available).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
}</strong>.</p>
      </div>
      <p className="text-center mb-0"><Link className="inline-block align-baseline font-bold text-sm" href="/">Back to home</Link></p>
    </>)
}