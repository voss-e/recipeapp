import React from 'react';
import Navbar from './components/Navbar'
import RecipeList from './components/RecipeList'
import RecipeContextProvider from './contexts/RecipeContext'
import { BrowserRouter, Route } from 'react-router-dom'
import RecipeForm from './components/RecipeForm.js'
import Recipe from './components/Recipe'

function App() {
  return (
    <div className="App">
    <RecipeContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component={RecipeList} />
        <Route path='/newrecipe' component={RecipeForm} />
        <Route path='/recipes/:id' component={Recipe} />

      </BrowserRouter>
    </RecipeContextProvider>
    </div>
  );
}

export default App;
