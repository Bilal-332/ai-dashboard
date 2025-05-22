import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full text-center">
        <h1 className="text-4xl font-bold">AI Dashboard</h1>
        <p className="text-gray-600">Your central hub for AI insights and analytics</p>
      </header>
      <main className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <p className="text-gray-500">View detailed analytics and performance metrics.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Reports</h2>
          <p className="text-gray-500">Generate and download AI-driven reports.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Settings</h2>
          <p className="text-gray-500">Customize your dashboard preferences.</p>
        </div>
      </main>
      <footer className="w-full text-center text-gray-500">
        <p>&copy; 2025 AI Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}
