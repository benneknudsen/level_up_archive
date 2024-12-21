import './App.css'
import { Header } from './components/organisms/header/header'

function App() {
  return (
    <div className="bg-bg-dark min-h-screen text-white font-game">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="game-dashboard bg-bg-secondary rounded-game-card p-6 shadow-game-glow">
          <h2 className="text-xl font-semibold text-accent-purple mb-4">My Games Library</h2>
          {/* We'll add game components here later */}
        </div>
      </main>
    </div>
  )
}

export default App