import './App.css';
import React from 'react';
import { Routes, Route, Router, BrowserRouter} from 'react-router-dom'
import UserLists from './components/UserList';
import UserPosts from './components/UserPosts';
import PostDetails from './components/PostDetail';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element = {<HomePage/>}></Route>
          <Route exact path='/users' element={<UserLists/>}></Route>
          <Route exact path='/user/:userId/posts' element={<UserPosts/>}></Route>
          <Route exact path='/user/:userId/post/:postId' element={<PostDetails/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
    
}

export default App;
