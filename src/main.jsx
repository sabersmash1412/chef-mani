import React from "react"
import Recipe from "./Recipe"
import Ingredients from "./Ingredients"
import { getRecipeFromMistral } from "./ai"

export default function Main() {

    const [ingredient, setIngredient] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    function submit(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient.trim()) {
            setIngredient(prev => [...prev, newIngredient])
        }
    }

    async function getRecipe() {
        const response = await getRecipeFromMistral(ingredient)
        setRecipe(response)
    }


    return (
        <main>
            <form action={submit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. rice"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredient.length > 0 && <Ingredients ingredient={ingredient} getRecipe={getRecipe}/>}
            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}