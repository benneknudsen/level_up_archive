import { Header } from "./components/organisms/header/header"
import { Welcome } from "./pages/welcome"

function App() {
  return (
    <div className="bg-bg-dark min-h-screen text-white dark yellowTheme">
      <Header />
      <main className="z-10">
        <Welcome />
      </main>
    </div>
  )
}

export default App