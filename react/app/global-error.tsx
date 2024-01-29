'use client'

import { useRouter } from 'next/router';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter();
  return (
    <html lang="en">
      <body>
        <main className="h-full w-full flex flex-col items-center justify-center">
          <section className="w-full max-w-md m-auto">
            <article className="bg-white shadow-md rounded px-8 pt-6 pb-8">
              <p className="mb-4 text-center">Oops, something went wrong.</p>
              {error && <p className="text-center text-sm mb-4 text-primary">Error:  {error.digest}</p>}
              <p className="mb-4 text-center text-sm"><button className="text-primary hover:text-primaryHover" onClick={() => reset()}>Try again</button></p>
              <p className="mb-0 text-center text-sm"><a href="#" onClick={(e) => { e.preventDefault(); router.replace('/') }}>Go back to Home</a></p>
            </article>
          </section>
        </main>
      </body>
    </html>
  )
}