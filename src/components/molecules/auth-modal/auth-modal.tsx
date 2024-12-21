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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" 
      onClick={onClose}
    >
      <div 
        className="relative bg-bg-secondary rounded-game-car max-w-md shadow-game-glow" 
        onClick={e => e.stopPropagation()}
      >
         
        {showSignIn ? (
          <SignIn />
        ) : (
          <>
            <SignUp />
            <p className="mt-4 text-sm text-center">
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