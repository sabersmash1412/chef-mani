import React from "react"

export default function Main() {

    const [ingredient, setIngredient] = React.useState([])

    function submit(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient.trim()) {
            setIngredient(prev => [...prev, <li key={newIngredient}>{newIngredient}</li>])
        }
    }

    return (
        <main>
            <form action={submit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredient}
            </ul>
        </main>
    )
}