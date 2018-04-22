import React from 'react';

const RecipeDetails = ({
    loadedRecipe,
    handleClose,
    ingredientsList,
    modalActive
}) => {
    return (
        <div
            className={
                modalActive ? 'recipeModal recipeModal--active' : 'recipeModal'
            }
        >
            <div className="recipeModal__overlay" />
            <div className="recipeModal__content">
                {Object.keys(loadedRecipe).length !== 0 ? (
                    <div>
                        <button
                            className="recipeModal__close"
                            onClick={handleClose}
                        >
                            <i className="fas fa-times" />
                        </button>

                        <div className="modalSection">
                            <h2 className="modalSection__title">Information</h2>
                            <dl>
                                <dt>Title: </dt>
                                <dd>{loadedRecipe.label}</dd>

                                <dt>Source:</dt>
                                <dd>{loadedRecipe.source}</dd>

                                <dt>Servings:</dt>
                                <dd>{loadedRecipe.yield}</dd>

                                <dt>Preparation time:</dt>
                                <dd>{loadedRecipe.totalTime} minutes</dd>
                            </dl>
                        </div>

                        <div className="modalSection">
                            <h2 className="modalSection__title">Ingredients</h2>
                            <ul className="recipeModal__list">
                                {loadedRecipe.ingredientLines.map(
                                    (ingredient, index) => {
                                        let haveIngredient = false;

                                        for (
                                            let i = 0;
                                            i < ingredientsList.length;
                                            i++
                                        ) {
                                            const index = ingredient
                                                .toLowerCase()
                                                .indexOf(
                                                    ingredientsList[
                                                        i
                                                    ].toLowerCase()
                                                );
                                            if (index > 0)
                                                haveIngredient = true;
                                        }

                                        return (
                                            <li
                                                className={
                                                    haveIngredient
                                                        ? 'recipeModal__listItem haveIngredient'
                                                        : 'recipeModal__listItem'
                                                }
                                                key={index}
                                            >
                                                {ingredient}
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                            <a
                                className="button button--cta"
                                href={loadedRecipe.url}
                                target="_blank"
                            >
                                View Recipe
                                <i className="fas fa-chevron-right" />
                            </a>
                        </div>
                        <div className="modalSection">
                            <h2 className="modalSection__title">
                                Nutrition Values
                            </h2>
                            <table className="recipeModal__table">
                                <thead>
                                    <tr>
                                        <th>Nutrient</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(loadedRecipe.totalDaily).map(
                                        key => (
                                            <tr>
                                                <td>
                                                    {
                                                        loadedRecipe.totalDaily[
                                                            key
                                                        ].label
                                                    }
                                                </td>
                                                <td>
                                                    {loadedRecipe.totalDaily[
                                                        key
                                                    ].quantity.toFixed(0)}
                                                    {
                                                        loadedRecipe.totalDaily[
                                                            key
                                                        ].unit
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default RecipeDetails;
