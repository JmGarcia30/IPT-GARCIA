import './App.css';
import AppNavbar from './components/AppNavbar';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';


function App() {
  return (
    <>
      <AppNavbar/>
      <Home/>
      <Products/>
      <About/>
    </>
  );
}

export default App;
