import GsapFrom from "./components/GsapFrom";
import GsapFromTo from "./components/GsapFromTo";
import GsapScrollTrigger from "./components/GsapScrollTrigger";
import GsapStagger from "./components/GsapStagger";
import GsapText from "./components/GsapText";
import GsapTimeline from "./components/GsapTimeline";
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
      <GsapTimeline />
      <GsapStagger />
      <GsapScrollTrigger />
      <GsapText />
    </>
  );
}

export default App;
