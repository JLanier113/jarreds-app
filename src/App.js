import React from 'react';
import './App.css';
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';
import Content from './Pages/Content';
import Sidebar from './Pages/Sidebar';
import Footer from './Pages/Footer';

function App() {
  return (
    <div>
      <Header />
<Navbar />
<div className="row">
<Content />
<Sidebar />
</div>
<Footer />
    </div>
  );
}

export default App;
