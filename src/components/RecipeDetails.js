import React, { useContext } from 'react'
import { RecipeContext } from '../contexts/RecipeContext'
import { Link } from 'react-router-dom'


const divStyle = {
  width: '20rem',
  margin: '20px',
}

const RecipeDetails = ({ recipe }) => {
  const { removeRecipe } = useContext(RecipeContext)


  return (
    <div className="col-md-4" id={recipe.id}>
      <div className="card" style={divStyle}>
      <img className="card-img-top" src={recipe.img} alt="pic"/>
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <p className="card-text">{recipe.description}</p>
          <Link to={{pathname: '/recipes/' + recipe.id , state: { recipe }}} className="btn btn-primary">Check Ingredients</Link>
        </div>
        </div>
      </div>

  )
}

export default RecipeDetails
