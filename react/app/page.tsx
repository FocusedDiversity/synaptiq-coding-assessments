import DatePicker from "@/components/DatePicker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-12">Combined Date Picker Example</h1>
      <div className="w-80">
        <DatePicker />
      </div>
    </main>
  );
}
