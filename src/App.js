import React from 'react';
import './App.css';
import Filter from './Components/Filter';
import Search from './Components/Search';
import List from './Components/List';

export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        Google Book Search
      </header>
      <Search />
      <Filter />
      <List />
    </div>
  );
}