// app/dashboard/page.tsx
"use client";

import { StatsCard } from "@/components/StatsCard";
import { BarChart, LineChart } from "@/components/Charts"; // Adjusted import path to use alias

export default function DashboardPage() {
// Extract data from StatsCard values
const totalProjects = 12;
const tasksCompleted = 45;

return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
        {/* Stats Cards */}
        <StatsCard title="Total Projects" value={totalProjects.toString()} />
        <StatsCard title="Tasks Completed" value={tasksCompleted.toString()} />
        <StatsCard title="Team Members" value="6" />

        {/* Charts */}
        <div className="col-span-1 md:col-span-3">
            <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-md font-medium mb-2">Projects Over Time</h3>
                    <BarChart
                        data={{
                            labels: ["Jan", "Feb", "Mar"],
                            datasets: [
                                {
                                    label: "Projects",
                                    data: [totalProjects - 2, totalProjects - 1, totalProjects],
                                    backgroundColor: "#4f46e5",
                                },
                            ],
                        }}
                    />
                </div>

                {/* Line Chart */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-md font-medium mb-2">Tasks Completed</h3>
                    <LineChart
                        data={{
                            labels: ["Jan", "Feb", "Mar"],
                            datasets: [
                                {
                                    label: "Tasks",
                                    data: [
                                        tasksCompleted - 20,
                                        tasksCompleted - 10,
                                        tasksCompleted,
                                    ],
                                    borderColor: "#4f46e5",
                                    tension: 0.4,
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
);
}
