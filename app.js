const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}


const displayMeals = meals => {
    mealContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'row ';
        mealDiv.innerHTML = `
        <div class="meal p-5 rounded">
            <img class="" src="${meal.strMealThumb}" alt="">
            <h3 class="mt-3 ">${meal.strMeal}</h3>
            <button onclick="displayDetails('${meal.strMeal}')" class="btn btn-success" > Details </button>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    });
}

const displayDetails = ingredient =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`
    // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]));
}

const renderMealInfo = mealInfo =>{
    const mealDiv = document.getElementById('meal-info');
    // console.log(mealInfo);
    mealDiv.innerHTML = `
       <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="mealInfo">
            <img src="${mealInfo.strMealThumb}">
            <h3 class="meal-name mt-3"> ${mealInfo.strMeal}</h3>
            <h5 class="text-start">Ingredient </h5>
            <li>${mealInfo.strIngredient1}</li>
            <li>${mealInfo.strIngredient2}</li>
            <li>${mealInfo.strIngredient3}</li>
            <li>${mealInfo.strIngredient4}</li>
            <li>${mealInfo.strIngredient5}</li>

       </div>
        </div>
       </div>
    `
}


