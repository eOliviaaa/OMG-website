import './App.css';
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function App({ children }) {
  return (
      <Router>
          <Header />
          <Routes>
              <Route exact path='/' exact element={ <Home /> } />
              <Route path='/admin' element={ <Admin /> } />
          </Routes>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              {children}
          </LocalizationProvider>
      </Router>
  );
}
