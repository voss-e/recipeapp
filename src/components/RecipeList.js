import React, { useContext } from 'react'
import RecipeDetails from './RecipeDetails'
import { RecipeContext } from '../contexts/RecipeContext'





const RecipeList = () => {

  const { recipes } = useContext(RecipeContext)

  return recipes.length ? (
    <div className="container">
      <div className="card-deck">
        <div className="row">
          {recipes.map(recipe => {
            return ( <RecipeDetails recipe={recipe} key={recipe.id} /> )
          })}
        </div>
      </div>
    </div>
  ) : (
    <div>There are no recipes</div>
  )
}

export default RecipeList
