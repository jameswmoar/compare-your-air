import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Search from "./Components/Search/Search";
import Results from './Components/Results/Results';
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);

  const setResultLoading = () => {
    const updatedResults = [{ loading: true }, ...results];
    setResults(updatedResults);
  }

  const handleResult = (newResult) => {
    const previousResults = results.filter(item => !item.loading);
    const updatedResults = [newResult, ...previousResults];
    setResults(updatedResults);
  }

  const closeResult = (id) => {
    const updatedResults = results.filter((item, i) => i !== id);
    setResults(updatedResults);
  }

  return (
    <div className="App" role="application">
      <div className="container">
        <Header />
        <Search handleResult={handleResult} setResultLoading={setResultLoading} />
        <Results results={results} closeResult={closeResult} />
      </div>
    </div>
  );
}

export default App;
