

export default function Home() {
  
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col items-center gap-4">
       <h1 className="text-3xl font-extrabold">Welcome to BoardCraft Studio</h1>
       <a href="/sign-in" className="px-4 py-2 bg-primary rounded-lg text-white">Get started</a>
      </main>
    </div>
  );
}
