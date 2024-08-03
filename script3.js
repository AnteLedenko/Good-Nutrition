const inputItem = document.getElementById('item-input');
const inputWeight = document.getElementById('weight-input');
const inputCalories = document.getElementById('calories-input');

const itemContainer = document.getElementById('item-list-container');
const weightContainer = document.getElementById('weight-list-container');
const caloriesContainer = document.getElementById('calories-list-container');
const deleteButtonContainer = document.getElementById('delete-button-container');
const totalCaloriesContainer = document.getElementById('total-calories-container');

document.getElementById('add-button').addEventListener('click',function(event){
    event.preventDefault();
});
document.getElementById('calculate-button').addEventListener('click',function(event){
    event.preventDefault();
});

function addList(){
    let item = document.createElement('p');
    item.innerHTML = inputItem.value;
    itemContainer.appendChild(item);

    let weight = document.createElement('p');
    weight.innerHTML = inputWeight.value;
    weightContainer.appendChild(weight);

    let calories = document.createElement('p');
    calories.innerHTML = inputCalories.value;
    caloriesContainer.appendChild(calories);


    let button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.className = 'delete-button';
    deleteButtonContainer.appendChild(button);

    button.addEventListener('click', function() {
        removeLine(item, weight, calories, button)
    });

    inputItem.value = '';
    inputWeight.value = '';
    inputCalories.value = '';
}

function removeLine(item,weight,calories,button){
    itemContainer.removeChild(item);
    weightContainer.removeChild(weight);
    caloriesContainer.removeChild(calories);
    deleteButtonContainer.removeChild(button);
}

function calculateCalories(){
    let totalCalories = 0;
    const caloriesList = caloriesContainer.getElementsByTagName('p');
    for (let i = 0; i < caloriesList.length; i++) {
        totalCalories += parseFloat(caloriesList[i].innerHTML);
    }
    totalCaloriesContainer.innerHTML = 'Total Calories: ' + totalCalories;
}

document.getElementById('search-input').addEventListener('input',function (){
    const searchInput = this.value.toLowerCase();
    const resultContainer = document.getElementById('search-result-container');

    resultContainer.innerHTML = '';

    if (searchInput === ''){
        return;
    }

    const filterData = items.filter(item => item.name.toLocaleLowerCase().includes(searchInput));

    filterData.forEach(item => {
        const itemList = document.createElement('div');
        itemList.classList.add('search-result');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.classList.add('result-image');

        const info = document.createElement('p')
        info.textContent = `${item.name}, ${item.weight}, ${item.calories}`; 

        itemList.appendChild(img);
        itemList.appendChild(info);

        resultContainer.appendChild(itemList);
    });
});
