import React from "react"

export default function Main() {

    const [ingredient, setIngredient] = React.useState([])

    const [recipeShown, setRecipeShown] = React.useState(false)

    function submit(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient.trim()) {
            setIngredient(prev => [...prev, <li key={newIngredient}>{newIngredient}</li>])
        }
    }

    function getRecipe() {
        setRecipeShown(prev => !prev)
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
            {ingredient.length > 0 && <section className="ingredient-list">
                <h2>Ingredients you have:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredient}</ul>
                {ingredient.length > 3 && <div className="get-recipe-container">
                    <div className="submit-to-ai">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>
                </div>}
            </section>}
            <section>
                {recipeShown && <h1>AI input</h1>}
            </section>
        </main>
    )
}