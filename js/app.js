// Getting Elements
const productsDOM = document.querySelector(".products-container");
const searchInput = document.querySelector(".search-input");
const companyInput = document.querySelector(".companies");
const priceValue = document.querySelector(".price-value");
let slidingPrice = document.getElementById("inputPrice");
let maxSlidePrice = 0;
// Getting data
const fetchProducts = function () {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const data = productsJsonList;
    // console.log(data);
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

// Using data
const displayProducts = (list) => {
  // console.log(list);
  // clearProducts();
  let id;
  console.log(list);
  const productList = list
    .map((product) => {
      id = product.id;
      const company = product.fields.company;
      const price = product.fields.price;
      const name = product.fields.name;
      const image = product.fields.image[0].url;

      if (price > maxSlidePrice) {
        maxSlidePrice = price;
        console.log(maxSlidePrice);
        console.log(typeof maxSlidePrice);
      }
      return `<article class="product">
      <div class="product-container">
        <img
          src="${image}"
          class="product-img img"
          alt="${name}"
        />

        <div class="product-icons">
          <a href="product.html?id=${id}" class="product-icon" >
            <i class="fas fa-search"></i>
          </a>
          <button
            class="product-cart-btn product-icon"
            data-id="${id}"
          >
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p class="product-name">${name}</p>
        <h5>${company}</h5>
        <h4 class="product-price">${formatPrice(price)}</h4>
      </footer>
    </article>`;
    })
    .join("");
  productsDOM.innerHTML = productList;
};

// Filter
const searchInit = (list) => {
  // console.log(list);

  searchInput.addEventListener("input", function () {
    try {
      let value = this.value.toLowerCase();
      let id;
      let company;
      let price;
      let name;
      let image;
      const companies = list
        .map((data) => {
          id = data.id;
          company = data.fields.company;
          price = data.fields.price;
          name = data.fields.name;
          image = data.fields.image[0].url;
          if (`${data.fields.name.toLowerCase()}`.startsWith(value)) {
            return `<article class="product">
          <div class="product-container">
       <img src="${image}" class="product-img img" alt="${name}"/>
  
        <div class="product-icons">
        <a href="product.html?id=${id}" class="product-icon">
        <i class="fas fa-search"></i>
        </a>
        <button class="product-cart-btn product-icon" data-id="${id}" >
        <i class="fas fa-shopping-cart"></i>
       </button>
        </div>
        </div>
        <footer>
       <p class="product-name">${name}</p>
       <h5>${company}</h5>
       <h4 class="product-price">${formatPrice(price)}</h4>
       </footer>
       </article>`;
          } else {
            return ``;
          }
        })
        .join("");
      // console.log(companies);
      productsDOM.innerHTML = companies;
    } catch (error) {
      console.log(error);
    }
  });
};

// Click Company
const filter = (list) => {
  let all = document
    .getElementById("all")
    .addEventListener("click", function () {
      productsDOM.innerHTML = ``;
      const productList = list
        .map((product) => {
          const id = product.id;
          const company = product.fields.company;
          const price = product.fields.price;
          const name = product.fields.name;
          const image = product.fields.image[0].url;

          return `<article class="product">
      <div class="product-container">
        <img
          src="${image}"
          class="product-img img"
          alt="${name}"
        />

        <div class="product-icons">
          <a href="product.html?id=${id}" class="product-icon">
            <i class="fas fa-search"></i>
          </a>
          <button
            class="product-cart-btn product-icon"
            data-id="${id}"
          >
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p class="product-name">${name}</p>
        <h5>${company}</h5>
        <h4 class="product-price">${formatPrice(price)}</h4>
      </footer>
    </article>`;
        })
        .join("");
      productsDOM.innerHTML = productList;
    });

  let ikea = document
    .getElementById("ikea")
    .addEventListener("click", function () {
      productsDOM.innerHTML = ``;

      const productList = list
        .map((product) => {
          const id = product.id;
          const company = product.fields.company;
          const price = product.fields.price;
          const name = product.fields.name;
          const image = product.fields.image[0].url;

          if ("ikea" == `${company}`) {
            return `<article class="product">
    <div class="product-container">
      <img
        src="${image}"
        class="product-img img"
        alt="${name}"
      />

      <div class="product-icons">
        <a href="product.html?id=${id}" class="product-icon">
          <i class="fas fa-search"></i>
        </a>
        <button
          class="product-cart-btn product-icon"
          data-id="${id}"
        >
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <footer>
      <p class="product-name">${name}</p>
      <h5>${company}</h5>
      <h4 class="product-price">${formatPrice(price)}</h4>
    </footer>
  </article>`;
          }
        })
        .join("");

      productsDOM.innerHTML = productList;
    });

  let marcos = document
    .getElementById("marcos")
    .addEventListener("click", function () {
      productsDOM.innerHTML = ``;

      const productList = list
        .map((product) => {
          const id = product.id;
          const company = product.fields.company;
          const price = product.fields.price;
          const name = product.fields.name;
          const image = product.fields.image[0].url;

          if ("marcos" == `${company}`) {
            return `<article class="product">
    <div class="product-container">
      <img
        src="${image}"
        class="product-img img"
        alt="${name}"
      />

      <div class="product-icons">
        <a href="product.html?id=${id}" class="product-icon">
          <i class="fas fa-search"></i>
        </a>
        <button
          class="product-cart-btn product-icon"
          data-id="${id}"
        >
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <footer>
      <p class="product-name">${name}</p>
      <h5>${company}</h5>
      <h4 class="product-price">${formatPrice(price)}</h4>
    </footer>
  </article>`;
          }
        })
        .join("");

      productsDOM.innerHTML = productList;
    });

  let caressa = document
    .getElementById("caressa")
    .addEventListener("click", function () {
      productsDOM.innerHTML = ``;

      const productList = list
        .map((product) => {
          const id = product.id;
          const company = product.fields.company;
          const price = product.fields.price;
          const name = product.fields.name;
          const image = product.fields.image[0].url;

          if ("caressa" == `${company}`) {
            return `<article class="product">
    <div class="product-container">
      <img
        src="${image}"
        class="product-img img"
        alt="${name}"
      />

      <div class="product-icons">
        <a href="product.html?id=${id}" class="product-icon">
          <i class="fas fa-search"></i>
        </a>
        <button
          class="product-cart-btn product-icon"
          data-id="${id}"
        >
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <footer>
      <p class="product-name">${name}</p>
      <h5>${company}</h5>
      <h4 class="product-price">${formatPrice(price)}</h4>
    </footer>
  </article>`;
          }
        })
        .join("");

      productsDOM.innerHTML = productList;
    });

  let liddy = document
    .getElementById("liddy")
    .addEventListener("click", function () {
      productsDOM.innerHTML = ``;

      const productList = list
        .map((product) => {
          const id = product.id;
          const company = product.fields.company;
          const price = product.fields.price;
          const name = product.fields.name;
          const image = product.fields.image[0].url;

          if ("liddy" == `${company}`) {
            return `<article class="product">
    <div class="product-container">
      <img
        src="${image}"
        class="product-img img"
        alt="${name}"
      />

      <div class="product-icons">
        <a href="product.html?id=${id}" class="product-icon">
          <i class="fas fa-search"></i>
        </a>
        <button
          class="product-cart-btn product-icon"
          data-id="${id}"
        >
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <footer>
      <p class="product-name">${name}</p>
      <h5>${company}</h5>
      <h4 class="product-price">${formatPrice(price)}</h4>
    </footer>
  </article>`;
          }
        })
        .join("");

      productsDOM.innerHTML = productList;
    });
};

// Price Value
const priceVal = (list) => {
  // let slidingPrice = document.getElementById("inputPrice");

  slidingPrice.max = maxSlidePrice;

  slidingPrice.addEventListener("click", function () {
    clearProducts();
    priceValue.innerHTML = `<p>Value : ${formatPrice(slidingPrice.value)}</p>`;

    const productList = list
      .map((product) => {
        const id = product.id;
        const company = product.fields.company;
        const price = product.fields.price;
        const name = product.fields.name;
        const image = product.fields.image[0].url;

        if (parseInt(slidingPrice.value, 10) >= `${price}`) {
          console.log(
            `The value from slider ${
              document.getElementById("inputPrice").value
            }`
          );
          console.log(`The price : ${price}`);
          return `<article class="product">
    <div class="product-container">
      <img
        src="${image}"
        class="product-img img"
        alt="${name}"
      />

      <div class="product-icons">
        <a href="product.html?id=${id}" class="product-icon">
          <i class="fas fa-search"></i>
        </a>
        <button
          class="product-cart-btn product-icon"
          data-id="${id}"
        >
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <footer>
      <p class="product-name">${name}</p>
      <h5>${company}</h5>
      <h4 class="product-price">${formatPrice(price)}</h4>
    </footer>
  </article>`;
        }
      })
      .join("");

    productsDOM.innerHTML = productList;
  });
};

// Clear Products
function clearProducts() {
  productsDOM.innerHTML = ``;
}

// Execution
// Getting Data
const data = fetchProducts();
// Saving data in localStorage
setupStore(data);
// Displaying Products
displayProducts(data);
// Searching products
searchInit(data);
// Filter company
filter(data);
// Input price
priceVal(data);
