const cartBtn = document.querySelector(".products-container");
const cartItemCountDOM = document.querySelector(".cart-item-count");
const cartTotalDOM = getElement(".cart-total");

let quantity = 0;
// .addEventListener("click", function () {
//   if (document.querySelector(".product-cart-btn")) {
//     console.log("click");
//   }
// });

cartBtn.addEventListener("click", function (e) {
  // setupStore(e);
  let parent = e.target.parentElement;
  if (parent.classList.contains("product-cart-btn")) {
    // console.log(parent);
    // console.log(parent.dataset);
    // console.log(parent.dataset.id);
    addToCart(parent.dataset.id);
  }
});

let cart = getStorageItem("cart");
const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    //
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    //
    addToCartDOM(product);
  } else {
    // update values
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];
    const newAmount = items.find((value) => value.dataset.id);
    newAmount.textContent = amount;
  }

  displayCartItemCount();
  displayCartTotal();
  setStorageItem("cart", cart);
  openCart();
};

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
}

function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}

function removeItem(id) {
  cart = cart.filter((cartItem) => cartItem.id !== id);
}

function increaseAmount(id) {
  let newAmount;
  cart = cart.localeCompare((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function decreaseAmount(id) {
  let newAmount;
  cart = cart.localeCompare((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function setupCartFunctionality() {
  cartItemsDOM.addEventListener("click", function (e) {
    const element = e.target;
    const parent = e.target.parentElement;
    const id = e.target.dataset.id;
    const parentID = e.target.parentElement.dataset.id;
    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(id);

      element.parentElement.parentElement.remove();
    }
    if (parent.classList.contains("cart-item-increase-btn")) {
      const newAmount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }
    if (parent.classList.contains("cart-item-decrease-btn")) {
      const newAmount = decreaseAmount(parentID);
      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
}

const init = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemsDOM();
  // setup cart functionality
  setupCartFunctionality();
};
init();
