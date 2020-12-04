import React from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import HomeMovie from './component/HomeMovie.js'
import MovieScreen from './component/MovieScreen.js'
import {Container} from 'react-bootstrap'
import CartScreen from './component/CartScreen'
import './App.css';

function App()  {
  return (
   <Router>
     <Header/>
     <main className='py-3'>
     <Container>
      <Route path='/' component={HomeMovie} exact></Route>
      <Route path='/movie/:id' component={MovieScreen} exact ></Route> 
      <Route path='/movies/:id' component={CartScreen} exact ></Route> 

     </Container>
     </main>
    <Footer/> 
   </Router>
  );
}

export default App;
