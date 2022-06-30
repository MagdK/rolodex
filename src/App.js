import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState('');
  // console.log({searchField}); // we are loggin it out as an object, but setState is not an object in our case, it is a string
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);



  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); 
    });

    setFilteredMonsters(newFilteredMonsters);
    console.log('effect is firing');

  }, [monsters, searchField]);
  

  const onSearchChange = (event) => { 
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => { 
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };


  
  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='Search monsters...' 
      />
      <br />
      <SearchBox 
        className='title-search-box'
        onChangeHandler={onTitleChange} 
        placeholder='Set title...' 
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
};

export default App;