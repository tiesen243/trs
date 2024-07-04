import { Link } from '@tanstack/react-router'
import { ToggleTheme } from './toggle-theme'

export const Header: React.FC = () => {
  return (
    <header className="sticky inset-0 z-50 border-b bg-background/70 py-2 backdrop-blur-xl backdrop-saturate-150">
      <div className="container flex items-center justify-between gap-4">
        <Link href="/index">Home</Link>

        <ToggleTheme />
      </div>
    </header>
  )
}
