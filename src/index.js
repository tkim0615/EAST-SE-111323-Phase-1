const foods = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    },
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]



const restaurantMenu = document.getElementById('restaurant-menu')
////////////////////////////////////////////////////////////////////////beginning of forEach code
foods.forEach(food => {
addFoodImageToRestaruntMenu(food)
///deliverable 1 solution by TK////////////below eventlistener is inside foreach code so 'food' parameter is within same scope
})
//////////////////////////////////////////////////////////////////////////ending
//below is refactoring the for each loop
function addFoodImageToRestaruntMenu(food){
    const foodImage = document.createElement('img')
    foodImage.src = food.image
    restaurantMenu.appendChild(foodImage)

    foodImage.addEventListener('click', () => {
    displayFoodDetails(food)
 })
}

//make a function to add into above foodImage event listener since it's repetitive to write below 3 variables
function displayFoodDetails(food){   //food parameter is not equivalent to food paramet above, they are in different scope 
    
    const foodDetailImage = document.querySelector('.detail-image')
    foodDetailImage.src = food.image
    const foodName = document.querySelector('.name') 
    foodName.textContent = food.name
    const foodDescriptionDisplay = document.querySelector('#description-display')
    foodDescriptionDisplay.textContent = food.description
}
////////////below variables are in Global scope, different from above function scope
displayFoodDetails(foods[0]) // set initial page to load 1st food in foods array



//deliverable solution 2
const newFoodForm = document.getElementById('new-food')

newFoodForm.addEventListener('submit', (e) => {e.preventDefault()   //form is submit event, click would respond to any click on any part of Form

const newNameInputElement = document.getElementById('new-name')
const newImageInputElemet = document.getElementById('new-image')
const newDescriptionInputElement = document.getElementById('new-description')


const newFood = {                                   ///food was object with 3 key and values. creating same for new food to be added
    name: newNameInputElement.value,    ///pulling from above variable. 
    image: newImageInputElemet.value,
    description: newDescriptionInputElement.value
}

addFoodImageToRestaruntMenu(newFood)
newFoodForm.reset()

}
)
    
    








// const foodDetailImage = document.querySelector('.detail-image')
// foodDetailImage.src = foods[1].image

// const foodName = document.querySelector('.name') 
// foodName.textContent = foods[1].name

// const foodDescriptionDisplay = document.querySelector('#description-display')
// foodDescriptionDisplay.textContent = foods[1].description