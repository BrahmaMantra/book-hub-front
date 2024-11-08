import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold">ModernLibre Admin</h1>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </header>
      <main className="container py-6">
        {children}
      </main>
    </div>
  )
}