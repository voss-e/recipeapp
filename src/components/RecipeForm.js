import React, { useContext, useState } from 'react'
import { RecipeContext } from '../contexts/RecipeContext'
import { Link } from 'react-router-dom'

const divStyle = {
  margin: 'auto',
  width: '50%',

}

const RecipeForm = () => {


  const { addRecipe } = useContext(RecipeContext)
  const [ recipeName, setRecipeName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ photoURL, setPhotoURL ] = useState('')
  const [ ingredients, setIngredients ] = useState('')


  const handleSubmit = (e) => {
    // e.preventDefault()

    addRecipe(recipeName, photoURL, description, ingredients)
    setRecipeName('')
    setPhotoURL('')
    setDescription('')
    setIngredients('')
  }


  return (
    <div className="container const mt-5" style={divStyle} onSubmit={handleSubmit}>
      <form>
        <div className="form-group">
          <label>Recipe name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Pecan Pie" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required/>
        </div>

        <div className="form-group">
          <label >Photo URL</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="https://www.imgur.com/example" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} required/>
          <small id="emailHelp" className="form-text text-muted">Sorry I am too lazy to host photos.</small>
        </div>

        <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required="required"></textarea>
      </div>

      <div className="form-group">
        <label>Ingredients</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required="required"></textarea>
      </div>

        <Link to='/' onClick={handleSubmit} className="btn btn-primary">Submit</Link>
      </form>
    </div>
  )
}


export default RecipeForm
