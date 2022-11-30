import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar, Footer } from './components'
import Home from './pages/HomePage/Home'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
