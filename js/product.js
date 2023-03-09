const singleProduct = document.querySelector(".single-product");

const fetchSingleProduct = function () {
  singleProduct.innerHTML = '<div class="loading"></div>';
  try {
    const info = infoProducts;
    return info;
  } catch (error) {
    console.log(error);
  }
};

let url = new URL(`${document.URL}`);
// console.log(url.searchParams.get("id"));

const displaySingleProduct = (list) => {
  console.log(list);

  const info = list
    .map((data) => {
      const id = data.id;
      const img = data.fields.image[0].url;
      const title = data.fields.name;
      const company = data.fields.company;
      const price = data.fields.price;
      const colors = data.fields.colors;
      const description = data.fields.description;
      // console.log(id);
      if (url.searchParams.get("id") == id) {
        return `<div class="section-center single-product-center">
        <img
          src="${img}"
          class="single-product-img img"
          alt="${title}"
        />
        <article class="single-product-info">
          <div>
            <h2 class="single-product-title">${title}</h2>
            <p class="single-product-company text-slanted">by ${company}</p>
            <p class="single-product-price">${formatPrice(price)}</p>
            <div class="single-product-colors">
              <span
                class="product-color"
                style="background-color: ${colors[0]}"
              ></span
              ><span
                class="product-color"
                style="background-color: ${colors[1]}"
              ></span>
            </div>
            <p class="single-product-desc">
             ${description}
            </p>
            <button class="addToCartBtn btn" data-id="${id}">add to cart</button>
          </div>
        </article>
      </div>`;
      }
    })
    .join("");
  singleProduct.innerHTML = info;
  //   console.log(info);
};

const infoProd = fetchSingleProduct();
displaySingleProduct(infoProd);
