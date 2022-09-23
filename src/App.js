import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message="jello" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
