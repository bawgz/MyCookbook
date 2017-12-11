/*
* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
exports.MyCookbook = function MyCookbook (req, res) {
    const greenBeanCasserole = {
        "ingredients": [
            "green beans",
            "cream of mushroom soup",
            "casserole",
            "crispy bois"
        ],
        "steps": [
            "Put grean beans in pan",
            "Pour cream of mushroom soup in pan",
            "Put crispy bois on top",
            "Put in oven"
        ]
    }
    const chickenNoodleSoup = {
        "ingredients": [
            "chicken",
            "noodles",
            "soup"
        ],
        "steps": [
            "Put chicken in pot",
            "Put noodles in pot",
            "Put soup in pot",
            "Put on stove"
        ]
    }
    const recipes = {
        "green bean casserole": greenBeanCasserole,
        "chicken noodle soup": chickenNoodleSoup
    }
    const recipe = req.body.result.parameters["recipe"]; // recipe is a required param
    const ingredientIndex = req.body.result.parameters["ingredientIndex"];
    if (recipe && recipeIndex) {
        response = recipes[recipe].ingredients[ingredientIndex] || "No more ingredients, let's get cookin"
    } else {
        recipeIndex = 0;
        response = recipes[recipe] ?
            "Ok! Let's start making " + recipe
            + ". I'll begin listing the ingredients. Say next after each ingredient to hear the next! First ingredient is "
            + recipes[recipe].ingredients[recipeIndex]
            : "I'm sorry, I don't know how to make that recipe yet.";
    }
    res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
    res.send(
        JSON.stringify({
            "speech": response,
            "displayText": response,
            "context": {
                "ingredientIndex": {
                    "ingredientIndex": ingredientIndex,
                },
                "recipe": {
                    "recipe": recipe
                }
            }
            //"speech" is the spoken version of the response, "displayText" is the visual version
        })
    );
};
