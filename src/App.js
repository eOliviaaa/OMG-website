import './App.css';
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Footer from "./components/footer/Footer.js";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

export default function App({ children }) {
  return (
      <Router>
          <Header />
          <Routes>
              <Route exact path={'/'} element={<Home />} />
              <Route path={'/medlemmer'} element={<Members />}/>
          </Routes>
          <Footer />
      </Router>
  );
}
