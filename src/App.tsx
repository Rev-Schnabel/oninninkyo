import React from "react";

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
import { Store } from "./store/store";
import { History } from "./history/history";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
          <Route path={`${process.env.PUBLIC_URL}/founder`} element={<Founder />} />
          <Route path={`${process.env.PUBLIC_URL}/oninninian`} element={<Oninninian />} />
          <Route path={`${process.env.PUBLIC_URL}/store`} element={<Store/>} />
          <Route path={`${process.env.PUBLIC_URL}/history`} element={<History/>} />
          <Route path={`${process.env.PUBLIC_URL}/archive`} element={<Archive />} />
          <Route path={`${process.env.PUBLIC_URL}/*`} element={< Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export const Error404: React.FC = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found.</p>
    </div>
  );
}

export default App;
