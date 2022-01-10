import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Home from './components/Home/Home';
import Routine from "./components/Routines/Routine";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routines" element={<Routine />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
