import React from 'react';
import LinkBox from '../../layout/header/routeBox/LinkBox';
import Search from '../../layout/header/seachBox/search';
import Profile from '../../layout/userPage/Profile/Profile';
import './App.css';



function App() {

  return (
    <div className="App">
      <div className="container">
        <LinkBox />
        <Search />
        <Profile />
      </div>
    </div>
  )
}
export default App;
