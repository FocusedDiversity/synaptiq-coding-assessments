import JobSelectForm from '@/components/forms/JobSelectForm';

export default function Home() {
  return (
    <section className="w-full max-w-md m-auto">
      <article className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <header className="mb-4">
          <h1 className="mb-0"><span className="text-xs mb-2 block">Welcome to</span><span className="block text-xl text-secondary">Anthony Mack&lsquo;s Technical Assessment</span></h1>
        </header>
        <section>
          <p className="mb-4 text-sm">This is a quick example on how to work within Next.js and integrate with a 3rd party UI library such as <a href="https://polaris.shopify.com/" target="_blank">Polaris Shopify</a>.</p>
          <p className="mb-5 text-xs">I have chosen to simulate a job application portal similar to what is shown in Freshteam minus the really important information like employment history.  A bit of humor is added to this statement :)</p>
          <JobSelectForm />
        </section>
      </article>
    </section>
  )
}
