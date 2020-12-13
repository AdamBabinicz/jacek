import React, { useState } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const GlobalStyle = createGlobalStyle`
body{
  background:${(props) => (props.theme.mode == "dark" ? "#111" : "#fff")};
  color:${(props) => (props.theme.mode === "dark" ? "#fff" : "#111")};
}
`;

const App = () => {
  const [theme, setTheme] = useState({ mode: "dark" });

  let location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route path="/slider" component={Slider} />
            <Route path="/footer" component={Footer} />
            <Redirect to="/"></Redirect>
          </Switch>
        </AnimatePresence>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
