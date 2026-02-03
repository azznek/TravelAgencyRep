import Hero from './components/Hero';
import About from './components/About';
import ChronoQuiz from './components/ChronoQuiz';
import Destinations from './components/Destinations';
import FAQ from './components/FAQ';
import ChronoBot from './components/ChronoBot';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <About />
      <ChronoQuiz />
      <Destinations />
      <FAQ />
      <ChronoBot />
      <Footer />
    </div>
  );
}

export default App;
