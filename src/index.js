// write your code here
const restaurantMenuElement = document.getElementById('restaurant-menu')

// get the server running with json-server --watch db.json first
fetch('http://localhost:2000/foods')
.then(response => response.json()) 
.then(foods => {

     displayFoodDetails(foods[0])
    
     foods.forEach( food => {                        
    addFoodImageTorestaurantMenu(food)     //Deliverable 2. run forEach on the array we got from server
 
})

})  

//deliverable 3 - refactor code from deliv. 2
function addFoodImageTorestaurantMenu(food){
const imgElement = document.createElement('img')
imgElement.src = food.image
restaurantMenuElement.appendChild(imgElement)

imgElement.addEventListener('click', () => 
    displayFoodDetails(food)
)
}
//deliverable 5 - refactor code from deliv 4
function displayFoodDetails(food){              //parameter food is 1 food that gets passed. rather than foods[0], can handle any kind of food passed in
    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0] //deliv 4
    foodDetailImageElement.src = food.image
    const foodName = document.getElementsByClassName('name')[0]
    foodName.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description 
}
