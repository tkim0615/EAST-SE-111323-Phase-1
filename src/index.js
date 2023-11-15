const burgers = [
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
    }
]

const otherFoods = [
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

// write your code here
//deliverable 1
for(let i = 0; i < burgers.length; i++){
    const img = document.createElement('img')
    img.className = 'burger'
    img.src = burgers[i].image
    const restaruntMenu = document.querySelector('#restaurant-menu')
    restaruntMenu.appendChild(img)
   
}

//deliverable 2
otherFoods.forEach( food => 
    {const img = document.createElement('img')
    img.src = food.image
    const restaruntMenu = document.querySelector('#restaurant-menu')
    restaruntMenu.appendChild(img)
})   

//deliverable 3
const image = document.querySelector('.detail-image')
console.log(image)
image.src = burgers[0].image

//deliverable 4
const name1 = document.querySelectorAll('.name')[0]  //?????
console.log(name1)
name1.textContent = burgers[0].name

//deliverable 5
const description = document.getElementById('description-display')
console.log(description)
description.textContent = burgers[0].description

//deliverable 6
const imgs = document.querySelectorAll('#restaurant-menu img')
console.log(imgs)
imgs.forEach( styles => {
    styles.style.borderStyle = 'solid'
    styles.style.borderColor = 'red'
    styles.style.borderWidth = '3px'
}
)

//deliverable 7
const imgBurger = document.getElementsByClassName('burger')
console.log(imgBurger)

for(i = 0; i < imgBurger.length; i++){
 imgBurger[i].style.borderColor = 'blue'
}

