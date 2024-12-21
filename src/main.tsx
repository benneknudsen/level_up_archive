import { StrictMode, createContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { ClerkProvider } from '@clerk/clerk-react'

import App from './App.tsx'
import { AuthModal } from './components/molecules/auth-modal/auth-modal'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

// Create a context for managing the auth modal
export const AuthModalContext = createContext({
  openAuthModal: () => {},
  closeAuthModal: () => {},
  isAuthModalOpen: false
});

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <AuthModalContext.Provider value={{ 
      openAuthModal, 
      closeAuthModal, 
      isAuthModalOpen 
    }}>
      <App />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={closeAuthModal} 
      />
      <SpeedInsights />
      <Analytics />
    </AuthModalContext.Provider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Root />
    </ClerkProvider>
  </StrictMode>
)