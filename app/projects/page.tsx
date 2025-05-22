import { mockProjects } from "@/constants/mockProjects"

export default function ProjectsPage() {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800">Projects</h1>
      {mockProjects.map(p => (
        <div key={p.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-lg font-semibold text-gray-700">{p.name}</h2>
          <p className="text-sm text-gray-500 mt-2">{p.description}</p>
        </div>
      ))}
    </div>
  )
}
