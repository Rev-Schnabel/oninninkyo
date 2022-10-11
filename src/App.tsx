import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { Home} from "./home/home";
import { About } from "./about/about";
import { Founder } from "./founder/founder";
import { Oninninian } from "./oninninian/oninninian";
import { Archive } from "./archive/archive";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/founder' element={<Founder />} />
          <Route path='/oninninian' element={<Oninninian />} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
