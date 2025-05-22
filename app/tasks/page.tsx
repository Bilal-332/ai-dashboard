import { mockTasks } from "@/constants/mockTasks"

export default function TasksPage() {
  return (
    <div className="space-y-6 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800">Tasks</h1>
      {mockTasks.map(t => (
        <div
          key={t.id}
          className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <p className="font-semibold text-lg text-gray-700">{t.title}</p>
          <p className="text-sm text-gray-500 mt-1">{t.status}</p>
        </div>
      ))}
    </div>
  )
}
