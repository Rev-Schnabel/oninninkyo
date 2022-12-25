import React from "react";

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import monaFont from "./fonts/IPAMonaGothic.woff";

import { Notfound } from "./notfound/notfound";
import { Home} from "./home/home";
import { About } from "./about/about";
import { Founder } from "./founder/founder";
import { Oninninian } from "./oninninian/oninninian";
import { Archive } from "./archive/archive";
import { Store } from "./store/store";
import { History } from "./history/history";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'monaFont',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'monaFont';
            src: local('monaFont'), url(${monaFont}) format('woff);
          }
        `
      }
    }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
            <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
            <Route path={`${process.env.PUBLIC_URL}/founder`} element={<Founder />} />
            <Route path={`${process.env.PUBLIC_URL}/oninninian`} element={<Oninninian />} />
            <Route path={`${process.env.PUBLIC_URL}/store`} element={<Store/>} />
            <Route path={`${process.env.PUBLIC_URL}/history`} element={<History/>} />
            <Route path={`${process.env.PUBLIC_URL}/archive`} element={<Archive />} />
            <Route path={`${process.env.PUBLIC_URL}/*`} element={< Notfound/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
