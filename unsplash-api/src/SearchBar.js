import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search/${term}`);
  };
  return (
    <div>
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}