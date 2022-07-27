
//setting the nav buttons 
    //on the click of either the breakfast, lunch, dinner or drinkls button; only the meals relating to that category should be shown on screen
    // the all button should display all the menu items


let selectors = Array.from(document.getElementsByClassName('selectors'))
let list = document.getElementsByClassName('items')

//setting the navbar buttons to call up few elements according to their type
for(let i = 0; i < selectors.length; i++) {
    let button = selectors[i];
    
    button.addEventListener('click', function(e) {
        e.preventDefault()

        //once any button is clicked, you want everything to disapear and only the items relating to a certain button are shown
        let allArr = Array.from(document.getElementsByClassName('items'));
        for(let each of allArr) {
            each.style.display = "none"
        }
        
        //only breakfast items
        if(e.target.innerHTML == "Breakfast") {
            let breakfastMeals = document.getElementsByClassName('breakfast');
            let breakfastMealsArr = Array.from(breakfastMeals);
            for(let each of breakfastMealsArr) {
                each.style.display = "flex"
                each.style.height = "fit-content"
            }
                
        }

        //only lunch items
        else if (e.target.innerHTML == "Lunch") {
            let lunchMeals = document.getElementsByClassName('lunch')
            let lunchMealsArr = Array.from(lunchMeals);
            for(let each of lunchMealsArr) {
                each.style.display = "flex"
                each.style.height = "fit-content"
            }
        }

        //only dinner items
        else if(e.target.innerHTML == "Dinner") {
            let dinnerMeals = document.getElementsByClassName('dinner');
            let dinnerMealsArr = Array.from(dinnerMeals);
            for(let each of dinnerMealsArr) {
                each.style.display = "flex"
                each.style.height = "fit-content"
            }
        }

        //only drinks items
        else if(e.target.innerHTML == "Drinks") {
            let drinks = document.getElementsByClassName('drinks');
            let drinksArr = Array.from(drinks);
            for(let each of drinksArr) {
                each.style.display = "flex"
                each.style.height = "fit-content"
            }
        }

        //everythin gon the menu
        else if(e.target.innerHTML == "All") {
            let all = document.getElementsByClassName('items')
            let allArr = Array.from(all); 
            for(let each of allArr) {
                each.style.display = "flex"
                each.style.height = '20vh'
            }
        }
    })
}


//start settign the order buttons
let orderBtns = Array.from(document.getElementsByClassName('order-btn'));
    for(let each of orderBtns) {
        each.addEventListener('click', function(e) {
            e.preventDefault();
            let allArr = Array.from(document.getElementsByClassName('items'));
            for(let each of allArr) {
                each.style.display = "none"
            }

            //when an order button is clicked, you only want to have that order on screen so you can enter the specifics before it is posted as an order. 
            //also create an input element where the user specifies the number of orders

            let targetMeal = e.target.parentNode.parentNode; 
            targetMeal.style.display = "flex"

            //creating the number input, type=number, placeholdertext
                //the code below introduces a bug such that everytime it's clicked, it adds the input element
                //on exiting the subfolder e.g the order section, the items maintain their input fields
            let noOfOrders = document.createElement('input');
            noOfOrders.placeholder = 'How many'
            noOfOrders.type = 'number'
            noOfOrders.style.margin = '10px auto'
            noOfOrders.style.width =  "200px"
            targetMeal.appendChild(noOfOrders)

            console.log(targetMeal);
        })
    }
console.log(orderBtns);
//setting the order buttons to add the order to the cart
    // on the click of the order button, the user should come to a new screen to enter the amount for the order
    // info to be passed to the cart should be the name, the price and the quantity
    // the total to be paid by the customer should be shown
    // 
