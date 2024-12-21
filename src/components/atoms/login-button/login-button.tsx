import { useState } from 'react'
import { AuthModal } from '../../molecules/auth-modal/auth-modal'

export const LoginButton = () => {
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <>
      <button 
        className="bg-accent-blue text-black px-4 py-2 rounded-game-card 
                   hover:bg-opacity-80 transition-colors duration-300"
        onClick={() => setShowAuthModal(true)}
      >
        Sign In
      </button>
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  )
}