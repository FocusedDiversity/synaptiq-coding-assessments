import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="w-full max-w-md m-auto">
      <article className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <p className="mb-4 text-center">Oops, the page you&lsquo;re looking for is not available.</p>
        <p className="mb-0 text-center text-sm"><Link href="/">Go back to Home</Link></p>
      </article>
    </section>
  );
}
