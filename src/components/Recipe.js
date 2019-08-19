import React, { useContext } from 'react'
import { RecipeContext } from '../contexts/RecipeContext'
import { Link } from 'react-router-dom'


const Recipe = (props) => {

  const { removeRecipe } = useContext(RecipeContext)

  return (

    <div className="container mid">
    <div className="one">
      <dl className="row bor">
        <dt className="col-sm-3 borderBottom">Name</dt>
        <dd className="col-sm-9">{props.location.state.recipe.name}</dd>

        <br/>

        <dt className="col-sm-3 borderBottom">Description</dt>
        <dd className="col-sm-9">{props.location.state.recipe.description}</dd>

        <dt className="col-sm-3 borderBottom">Ingredients</dt>
        <dd className="col-sm-9">{props.location.state.recipe.ingredients}</dd>
      </dl>
      </div>



      <div className="two">
      <img src={props.location.state.recipe.img} className="img-fluid" alt={props.location.state.recipe.description}></img>
      </div>

      <Link to={{pathname: '/'}} onClick={() => removeRecipe(props.location.state.recipe.id)}> <button className="btn btn-danger big">Delete</button> </Link>

    </div>
  )
}


export default Recipe
