
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

        //everything on the menu
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


//start setting the order buttons
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

            // show the target meal
            let targetMeal = e.target.parentNode.parentNode; 
            targetMeal.style.display = "flex"
            targetMeal.style.height = "fit-content"

            // hide the order button
            each.style.display = "none";
            // document.querySelector('.order-btn').style.display = "none"


            //creating the number input, type=number, placeholdertext

            let noOfOrders = document.createElement('input');
            noOfOrders.placeholder = 'How many'
            noOfOrders.type = 'number'
            noOfOrders.min = "1";
            noOfOrders.max = "20";
            noOfOrders.style.margin = '10px auto'
            noOfOrders.style.width =  "85px"
            targetMeal.appendChild(noOfOrders)

            // create a place order button
            let placeOrderBtn = document.createElement("button");
            placeOrderBtn.textContent = "PLace Order";
            placeOrderBtn.classList.add("place-order")
            targetMeal.appendChild(placeOrderBtn)

            // set the placeorder button
            noOfOrders.addEventListener('keyup', function(e){
                e.preventDefault;
                let valueOfOrder = parseInt(noOfOrders.value);
                
                if(valueOfOrder > 20) {
                    alert('The order is too big. Try 20');
                    noOfOrders.value = "20"
                    noOfOrders.style.backgroundColor = "lightblue"
                }
                else if (valueOfOrder >= 1 && valueOfOrder <= 20) {
                    noOfOrders.style.backgroundColor = "white"
                }
            })

            //need to add an event listener for when the any nav button is clicked
            for(let sel of selectors) {
                let button = sel;
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    targetMeal.removeChild(placeOrderBtn);
                    targetMeal.removeChild(noOfOrders);
                    each.style.display = "initial"
                })
            }

            //setting the placeOrder button 
            placeOrderBtn.addEventListener('click', function(e){
                e.preventDefault();
                // append every item whose placeorder button is clicked
                let cart = document.getElementById('ordered-items');

                let victim = placeOrderBtn.parentElement

                // getting the particulars of the meal ordered
                let name = victim.getElementsByClassName('name')[0].textContent;
                let price = victim.getElementsByClassName('price')[0].textContent;
                let picture = victim.getElementsByClassName('meal-pictures')[0].src;
                let quantity = noOfOrders.value;
                
                if(quantity == "") {
                    quantity = "1"
                }
                else if (parseInt(quantity) > 20) {
                    quantity = "20"
                    noOfOrders.value = "20"
                }

                // what is pushed into the cart
                let orderValues = `<div class="picture">
                                        <img src="${picture}">
                                    </div>
                                    <div class="name">${name}</div>
                                    <div class="quantity">${quantity}</div>
                                    <div class="cart-price">${price}</div>
                                    <button class="remove">
                                        <span>Remove</span>
                                        <i class="fa fa-trash-can"></i>
                                    </button>`

                // appending the order to the cart 
                let order = document.createElement('div');
                order.innerHTML = orderValues;
                order.classList.add('cart-content')
                cart.append(order)

                // not submitting values bigger than 20 for the orders

                //updating the quantity of orders after every order is placed
                let quantityOforders = parseInt(document.getElementById('cart-items').innerText) 

                let quantityOfNewOrder = parseInt(quantity)

                let updateQuantity = quantityOfNewOrder + quantityOforders

                document.getElementById('cart-items').innerText = updateQuantity.toString();


                // Updating the total cost after every order is added
                let valueOfOrders = parseInt(document.getElementById('total-value').innerText.replace('$', "")) 

                let valueOfNewOrder = parseInt(price.replace('$', "")) * quantityOfNewOrder

                let updateValue = valueOfOrders + valueOfNewOrder

                document.getElementById('total-value').innerText = `$${updateValue.toString()}`;
            })



        })
    }

// Interactions on the cart side

// setting the remove btn
    // a different approach could involve setting an event listener on the entire list of cart items
    let cartList = document.getElementById('ordered-items')


    cartList.addEventListener('click', function(e){
        e.preventDefault();
        
        if (e.target.innerHTML == "Remove") {
            e.target.parentElement.parentElement.remove();

            // reducing the number of orders based on the orders removed from the cart
            let quantityOforders = parseInt(document.getElementById('cart-items').innerText)

            let bear = e.target.parentElement.parentElement
            let quanityOfRemovedOrder = parseInt(bear.getElementsByClassName('quantity')[0].innerText)

            let updatedQuantity = quantityOforders - quanityOfRemovedOrder;

            document.getElementById('cart-items').innerText = updatedQuantity.toString();

        
            // Reducing the total cost by the value of the orders removed
            let valueOforders = parseInt(document.getElementById('total-value').innerText.replace('$', ""))


            let valueOfRemovedOrder = parseInt(bear.getElementsByClassName('cart-price')[0].innerText.replace('$', "")) * quanityOfRemovedOrder;

            let updatedValue = valueOforders - valueOfRemovedOrder;

            document.getElementById('total-value').innerText = `$${updatedValue.toString()}`;
        }
        // else if(e.target.className == "remove") {
        //     e.target.parentElement.remove();
        // }



    })


// setting the cart open and close buttons 

const cartBtn = document.getElementById('cart'); 
let orderCart = document.getElementById('cart-overlay');
cartBtn.addEventListener('click', function(e){
    orderCart.style.display = "initial";
})

//close cart 
let closeBtn = document.getElementById('close-cart')
    
closeBtn.addEventListener('click', function(e){
    orderCart.style.display = "none"
})



