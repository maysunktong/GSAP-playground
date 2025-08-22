import GsapFrom from "./components/GsapFrom";
import GsapFromTo from "./components/GsapFromTo";
import GsapTo from "./components/GsapTo";

function App() {
  return (
    <>
      <header className="py-4">
        <h1>GSAP Playground</h1>
      </header>
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
    </>
  );
}

export default App;
