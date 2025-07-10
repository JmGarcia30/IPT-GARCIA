import './App.css';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';


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
