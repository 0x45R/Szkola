const navigationPanel = document.querySelector(".navigation-panel")

const filterButton = document.querySelector('.filter-button')
const cartButton = document.querySelector('.cart-button')

const cartItems = [1]

const cartButtonClickEvent = (event) => {
  cartButton.classList.toggle("active")

  navigationPanel.innerHTML = 
    `<div class="navigation-panel-title">
      Twój koszyk
    </div>
    <div class="navigation-panel-content cart-container">
      <div class='cart-item'>
        <img class="cart-item-image" src="img/waterbottle.webp">
        <div class='cart-item-caption'>
          <div class='cart-item-title'>Woda 0.8L</div>
          <div class="cart-item-price">3.00zł</div>
        </div>
        <div class="cart-item-input">
          <div class="delete-cart-item">
            <i class="ti ti-x"></i>
          </div>
          <input type="number">
          </input>
        </div>
      </div>
      ${cartItems}
    </div>`
  

  navigationPanel.classList.toggle("active")
}

cartButton.addEventListener("click", cartButtonClickEvent)

/*
navigationButtons.forEach((button)=>{
  button.addEventListener("click", (e)=>{
    button.classList.toggle("active")

  })
})
*/
