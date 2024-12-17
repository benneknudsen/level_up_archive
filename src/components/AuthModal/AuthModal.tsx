import { SignIn, SignUp,  } from '@clerk/clerk-react'
import { useState } from 'react'
import './AuthModal.css'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [showSignIn, setShowSignIn] = useState(true)

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {showSignIn ? (
          <>
            <SignIn />
          </>
        ) : (
          <>
            <SignUp />
            <p>
              Already have an account?{' '}
              <button className="text-button" onClick={() => setShowSignIn(true)}>
                Sign in
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}