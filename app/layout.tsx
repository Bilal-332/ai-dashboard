import "./globals.css";
import { Sidebar } from "@/components/Sidebar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </body>
    </html>
  )
}
