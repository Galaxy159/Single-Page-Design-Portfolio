import "./styles/App.css";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Cv from "./components/Cv";
import Gallery from "./components/Gallery";
import Cta from "./components/Cta";

function App() {
  return (
    <>
      <main className="container">
        <Topbar />
        <Header />
        <Features />
        <Cv />
        <Gallery />
        <Cta />
        <Topbar />
      </main>
    </>
  );
}

export default App;
