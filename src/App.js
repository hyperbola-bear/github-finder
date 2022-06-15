import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <Router>
      <div className="flex flex-col justify-btween h-screen">
        <Navbar />

        <main>Content</main>
      </div>
      <h1>hello world</h1>
    </Router>
  );
}

export default App;
