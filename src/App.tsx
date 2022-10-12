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
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
          <Route path={`${process.env.PUBLIC_URL}/founder`} element={<Founder />} />
          <Route path={`${process.env.PUBLIC_URL}/oninninian`} element={<Oninninian />} />
          <Route path={`${process.env.PUBLIC_URL}/archive`} element={<Archive />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
