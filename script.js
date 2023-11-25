
const items = document.querySelector(".items");

const cardArray = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Steak",
        "imageSrc": "images/steak.png",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Russian Salad",
        "imageSrc": "images/salad.png",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "images/crisps.png",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "images/crisps.png",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "dessert",
        "imageSrc": "images/dessert.png",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

displayCardItems(cardArray);
function displayCardItems(elements){
    items.innerHTML = "";
    for(let i=0; i<elements.length; i++){
        const card = createCard(elements[i]);
        items.appendChild(card);
    }
}

function createCard(element){
    const card = document.createElement("div");
    card.id = "card";

    card.innerHTML = `
    <div class="item">
        <div class="card-image"><img src="${element.imageSrc}"></div>
        <div class="type">${element.type}</div>
        <div class="d-flex justify-content-between">
            <div class="item-name">${element.name}</div>
            <div class="item-rating"><img src="./images/Star.svg">${element.rating}</div>
        </div>
        <div class="d-flex justify-content-between">
            <div class="time">${element.time}</div>
            <div class="d-flex"> 
                <div class="like-icon"><img src="./images/Vector (1).svg"></div>
                <div class="comment-icon"><img src="./images/comments.svg"></div>
            </div>
        </div>
    </div>
    `
    const like = card.querySelector(".like-icon");
    like.addEventListener("click", ()=>{
        
        element.isLiked = !element.isLiked;
        like.innerHTML = element.isLiked ? `<img src="./images/Vector (1).svg"></img>` : `<img src="./images/Vector.svg"></img>`;
        
    });

    return card;
}

const search = document.getElementById("search");
search.addEventListener("input",()=>{
    const searchText = search.value.toLowerCase();
    const filteredRecipes = cardArray.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchText)
    );
    displayCardItems(filteredRecipes);
})

const allRecipes = document.querySelector(".btn1");
const vegRecipes = document.querySelector(".btn2");
const nonVegRecipes = document.querySelector(".btn3");

allRecipes.addEventListener("click",()=>{

    displayCardItems(cardArray);
})
vegRecipes.addEventListener("click",()=>{
    const filteredRecipes = cardArray.filter((recipe)=>
        recipe.type === "veg"
    );
    displayCardItems(filteredRecipes);
})
nonVegRecipes.addEventListener("click",()=>{
    const filteredRecipes = cardArray.filter((recipe)=>
        recipe.type === "non-veg"
    );
    displayCardItems(filteredRecipes);
})


const ratingSelected = document.querySelectorAll(`input[name="ratings"]`);

ratingSelected.forEach((rating) => {
    if(rating.id == "radio1"){
        rating.addEventListener("input",()=>{
            displayByRating(true);
        })
    }else if(rating.id == "radio2"){
        rating.addEventListener("input",()=>{
            displayByRating(false);
        })
    }else if(rating.id == "radio3"){
        rating.addEventListener("input",()=>{
            displayCardItems(cardArray);
        })
    }
})

function displayByRating(isTrue){
    const filteredRecipes = isTrue ? cardArray.filter(recipe => recipe.rating >= 4) : cardArray.filter(recipe => recipe.rating < 4);
    displayCardItems(filteredRecipes);
}

const menu = document.querySelector(".menu-btn");
const sideView = document.createElement("div");
sideView.id = "sideView";
const nav = document.querySelector("nav");

sideView.innerHTML = `
<div id="logo-1">
    <div><img src="./images/Cookpal 1.svg"></div>
    <div id="close"><i class="fa-solid fa-xmark"></i>
    </div>
</div>
<div class="menu-tags">
    <a href="#hero">Home</a>
    <a href="#search-section">Explore</a>
    <a href="#footer">Help</a>
</div>
`



sideView.style.display = "none";
nav.appendChild(sideView);

menu.addEventListener("click",()=>{
    sideView.style.display = "block";
})

const close = document.getElementById("close");
close.addEventListener("click",()=>{
    sideView.style.display = "none";
})