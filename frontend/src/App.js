import logo from './logo.svg';
import Header from './components/header';
import Curso from './components/curso';
import Mission from './components/mission';
import Home from './components/home';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/course" element={<Curso />}/>
          <Route path="/course/:subject" element={<Curso />}/>
          <Route path="/mission/:subject" element={<Mission />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
