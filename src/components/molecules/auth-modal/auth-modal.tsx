import { SignIn, SignUp } from '@clerk/clerk-react'
import { useState } from 'react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [showSignIn, setShowSignIn] = useState(true)

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="relative bg-bg-secondary rounded-game-card w-full max-w-md p-6 shadow-game-glow" 
        onClick={e => e.stopPropagation()}
      >
        {showSignIn ? (
          <SignIn />
        ) : (
          <>
            <SignUp />
            <p className="mt-4 text-sm text-center text-white">
              Already have an account?{' '}
              <button 
                className="text-accent-blue hover:underline" 
                onClick={() => setShowSignIn(true)}
              >
                Sign in
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}