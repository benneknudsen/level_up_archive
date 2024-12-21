import './App.css';
import { Header } from './components/organisms/header/header';
import { Welcome } from './pages/welcome';

function App() {
  return (
    <div className="bg-bg-dark min-h-screen text-white font-game relative">
      <Header />
      <main className="relative z-10">
        <Welcome />
      </main>
    </div>
  );
}

export default App;