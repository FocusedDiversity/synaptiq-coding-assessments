import DateList from "@/components/DateList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-80">
        <DateList />
      </div>
    </main>
  );
}
