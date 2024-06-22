import React, { useState, useEffect } from 'react';
import IssueList from './components/IssueList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(response => response.json())
      .then(data => {
        setIssues(data);
        setFilteredIssues(data);
      })
      .catch(error => console.error('Error fetching issues:', error));
  }, []);

  const handleSearch = (query) => {
    const filtered = issues.filter(issue =>
      issue.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredIssues(filtered);
  };

  return (
    <div className="App">
      <h1>React Issues</h1>
      <SearchBar onSearch={handleSearch} />
      <IssueList issues={filteredIssues} />
    </div>
  );
};

export default App;

