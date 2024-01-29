'use client'

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import jobs, { JobType } from '@/constants/jobs';

export default function JobSelectForm() {
  const [selectedJob, setJob] = useState<JobType | undefined>(undefined);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/apply/${selectedJob?.value}`)
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const foundJob = jobs.find(job => job.value === e.target.value);
    if (foundJob) setJob(foundJob);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="selected_job">
          Choose a job to apply for:
        </label>
        <select
          id="selected_job"
          name="selected_job"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-secondary focus:outline-none focus:shadow-outline"
          defaultValue={selectedJob?.label || ''}
          onChange={handleChange}
          autoComplete="off">
          {!selectedJob && <option>Choose...</option>}
          {jobs.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </div>
      <p className="flex justify-center"><button disabled={!selectedJob} className={`block ${!selectedJob ? 'bg-gray-400' : 'bg-primary hover:bg-primaryHover'} text-white hover:text-white transition py-2 px-4 rounded`} type="submit">Apply Now</button></p>
    </form>
  )
}
