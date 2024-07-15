import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import About from './Components/About';
import Contact from './Components/Contact';
import { useState } from 'react';

function App() {
  const [page, setpage] = useState(1)
  return (
    <div className="App">
     <Navbar setpage={setpage} />
     {page==1?<About/>:page==2?<Contact/>:<ProductList/>}
    </div>
  );
}

export default App;
