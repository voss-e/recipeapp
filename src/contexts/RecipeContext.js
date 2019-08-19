import React, { createContext, useState } from 'react'
import uuid from 'uuid/v4'

export const RecipeContext = createContext()

const RecipeContextProvider = (props) => {

const [ recipes, setRecipes ] = useState([
  {name: 'Apple Pie', description: 'Tasty pie', ingredients: 'Apple, Pie', img: 'https://images.pexels.com/photos/989704/pexels-photo-989704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: uuid()},
  {name: 'Apple Pie', description: 'Tasty pie', ingredients: 'Apple, Pie', img: 'https://images.pexels.com/photos/989704/pexels-photo-989704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: uuid()},
  {name: 'Pancakes', description: 'Sweet pancakes', ingredients: 'Pan, cake', img: 'https://images.pexels.com/photos/236804/pexels-photo-236804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: uuid()},
  {name: 'Pancakes', description: 'Sweet pancakes', ingredients: 'Pan, cake', img: 'https://images.pexels.com/photos/236804/pexels-photo-236804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: uuid()},
  {name: 'Pancakes', description: 'Sweet pancakes', ingredients: 'Pan, cake', img: 'https://images.pexels.com/photos/236804/pexels-photo-236804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: uuid()},
  {name: 'Pancakes', description: 'Sweet pancakes', ingredients: 'Pan, cake', img: 'https://images.pexels.com/photos/236804/pexels-photo-236804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: uuid()},
  {name: 'Pancakes', description: 'Sweet pancakes', ingredients: 'Pan, cake', img: 'https://images.pexels.com/photos/236804/pexels-photo-236804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: uuid()},
  {name: 'Pancakes', description: 'Sweet pancakes', ingredients: 'Pan, cake', img: 'https://images.pexels.com/photos/236804/pexels-photo-236804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: uuid()}
])

const addRecipe = (name, img, description, ingredients) => {
  setRecipes([...recipes, {name, img, description, ingredients, id: uuid()}])
}

const removeRecipe = (id) => {
  setRecipes(recipes.filter(recipe => recipe.id !== id))
}


  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe }}>
    { props.children }
    </RecipeContext.Provider>
  )
}

export default RecipeContextProvider
