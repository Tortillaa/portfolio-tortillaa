import ColorBends from "./components/ColorBends/ColorBends";
import Grid from "./components/Grid/Grid";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="cb-bg">
        <ColorBends
          colors={["#1466c3", "#4898e8", "#c0d9f7"]}
          speed={0.4}
          scale={1.5}
          frequency={1.7}
          warpStrength={1.1}
          noise={0.05}
          transparent
        />
      </div>
      <main className="app-content">
        <Grid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
