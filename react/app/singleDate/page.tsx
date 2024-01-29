import SingleDate from "@/components/SingleDate";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center p-24">
      <div className="w-80">
        <SingleDate />
      </div>
    </main>
  );
}
