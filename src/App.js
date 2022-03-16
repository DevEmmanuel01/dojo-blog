import Navbar from "./Navbar";
import Home from "./Home";
// Full react tutorial #5 - Multiple COmponets
function App() {
  return (
    <div className="App">
      {/* Nesting the navbar in the template */}
      {/*in js*/}
      <Navbar />
      {/* Nesting the HomePage in the template */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
