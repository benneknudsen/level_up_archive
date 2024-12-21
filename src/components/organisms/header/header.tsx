import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { LoginButton } from '../../atoms/login-button/login-button'
import { UserButton } from '@clerk/clerk-react'

export const Header = () => {
  return (
    <header className="bg-bg-secondary p-4 flex justify-between items-center shadow-game-glow">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-accent-blue ml-4">LevelUpArchive</h1>
      </div>
      <div className="auth-buttons flex items-center space-x-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <LoginButton />
        </SignedOut>
      </div>
    </header>
  )
}