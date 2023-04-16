import './App.css';
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Admin from "./pages/Admin";
import Home from "./pages/Home";

export default function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route exact path='/' exact element={<Home />} />
              <Route path='/admin' element={<Admin />} />
          </Routes>
      </Router>
  );
}
