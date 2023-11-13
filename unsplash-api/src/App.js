import React from 'react';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import GetImagesFromSearchTerm from './GetImagesFromSearchTerm';

function Home() {
  return <h2>Home Page</h2>;
}

function NotFound() {
  return <h2>Not Found</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar />
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search/:term" element={<GetImagesFromSearchTerm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;