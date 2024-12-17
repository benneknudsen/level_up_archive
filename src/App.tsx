import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { useState } from 'react'

import './App.css'
import { AuthModal } from './components/AuthModal/AuthModal'

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <div className="app">
      <header>
        <h1>LevelUpArchive</h1>
        <div className="auth-buttons">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <button className="sign-in-button" onClick={() => setShowAuthModal(true)}>
              Sign In
            </button>
          </SignedOut>
        </div>
      </header>

      <main>
        <div className="game-dashboard">
          <h2>My Games Library</h2>
          {/* We'll add game components here later */}
        </div>
      </main>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </div>
  )
}

export default App