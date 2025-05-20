
export default function Dashboard() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col items-center gap-4">
       <h1 className="text-3xl font-extrabold">Welcome to your Dashboard</h1>
       <a href="/learn" className="px-4 py-2 bg-primary rounded-lg text-white">Continue course</a>
      </main>
    </div>
  );
}