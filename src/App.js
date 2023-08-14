import './App.css';
import Header from "./components/header/Header";
import Home from "./pages/Home";

export default function App({ children }) {
  return (
      <body>
        <Header />
        <Home />
      </body>
  );
}
