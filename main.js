const url = "https://www.themealdb.com/api/json/v1/1/random.php";
const mealName = document.getElementById('name');
const mealInfo = document.getElementById('info');
const image = document.getElementById('img');
const button = document.getElementById('btn');

const getMeal = async () => {

    try {
        const response = await fetch(url);
        
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            mealName.innerHTML = jsonResponse.meals[0].strMeal;
            image.src = jsonResponse.meals[0].strMealThumb;
            mealInfo.innerHTML = jsonResponse.meals[0].strInstructions;
        }
    } 
    catch (error) {
        console.log(error);
    }
};

button.addEventListener('click', getMeal);
