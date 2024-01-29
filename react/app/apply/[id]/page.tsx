import ApplyForm from '@/components/forms/ApplyForm';

export default function Apply({ params }: { params: { id: string } }) {
  return (
    <section className="w-full max-w-md m-auto">
      <article className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <ApplyForm job={params.id} />
      </article>
    </section>
  )
}
