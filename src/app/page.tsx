import { Clock } from "./_components/clock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white bg-gradient-to-b text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <Clock />
      </div>
    </main>
  );
}
