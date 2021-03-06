import React from 'react';

const Sidebar = ({
    handleIngredientNumber,
    ingredientsList,
    handleRemoveFromList
}) => (
    <aside className="columnsWrapper__sidebar">
        <h2>Filters</h2>
        <label>Max number of ingredients:</label>
        <input
            placeholder="N/A"
            min="0"
            id="ingredientNumber"
            type="number"
            onChange={handleIngredientNumber}
        />
        <label>Ingredients:</label>
        <ul>
            {ingredientsList.map(ingredient => (
                <li>
                    <button
                        className="button button--remove"
                        value={ingredient}
                        onClick={handleRemoveFromList}
                        key={ingredient}
                    >
                        <i className="fas fa-times" />
                        {ingredient}
                    </button>
                </li>
            ))}
        </ul>
    </aside>
);
export default Sidebar;
