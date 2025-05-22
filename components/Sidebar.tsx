import Link from "next/link"

export function Sidebar() {
return (
    <aside className="w-64 bg-gray-100 shadow-lg p-6 border-r border-gray-300 flex flex-col justify-between min-h-screen overflow-y-auto">
        <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">AI Dashboard</h2>
            <nav className="flex flex-col gap-4">
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition">
                    Dashboard
                </Link>
                <Link href="/projects" className="text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition">
                    Projects
                </Link>
                <Link href="/tasks" className="text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition">
                    Tasks
                </Link>
                <Link href="/settings" className="text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition">
                    Settings
                </Link>
            </nav>
        </div>
        <div className="mt-6 border-t border-gray-300 pt-4">
            <Link href="/profile" className="text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition block mb-2">
                Profile
            </Link>
            <button className="text-gray-700 hover:text-red-500 transition w-full text-left">
                Logout
            </button>
        </div>
    </aside>
)
}
