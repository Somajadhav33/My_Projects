let options = document.querySelectorAll(".sideBar div");
let itemCategory = document.querySelector(".itemCategory");
let resultContainer = document.querySelector(".productList");


function getProducts(category) {
  
  resultContainer.innerHTML = "";
  let price = 200;
  if(category === "Home"){
    resultContainer.innerHTML = `<section class="new-arrivals">
              <h2>New Arrivals</h2>
              <div class="p">
                <div class="item">
                  <div class="newItem"><p class="tag">New</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>

                <div class="item">
                  <div class="newItem"><p class="tag">New</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>

                <div class="item">
                  <div class="newItem"><p class="tag">New</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>

                <div class="item">
                  <div class="newItem"><p class="tag">New</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>

                <div class="item">
                  <div class="newItem"><p class="tag">New</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>

                <div class="item">
                  <div class="newItem"><p class="tag">New</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>
              </div>
            </section>

            <section class="best-sellers" id="best-sellers">
              <h2>Best Sellers</h2>
              <div class="p">
                <div class="item">
                  <div class="newItem"><p class="tag">Best Seller</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>

                <div class="item">
                  <div class="newItem"><p class="tag">New</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>

                <div class="item">
                  <div class="newItem"><p class="tag">New</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>

                <div class="item">
                  <div class="newItem"><p class="tag">New</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>

                <div class="item">
                  <div class="newItem"><p class="tag">New</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>

                <div class="item">
                  <div class="newItem"><p class="tag">New</p></div>
                  <p class="itemName">Dating DR. DIL</p>
                  <p class="price">Starting From RS.200</p>
                  <button class="btn2">Add to Cart</button>
                </div>
              </div>
            </section>

            <section class="promotions">
              <h2>Special Offers</h2>
              <p>Get 20% off your first order!</p>
            </section>

            <section class="customer-reviews">
              <h2>What Our Customers Say</h2>
              <!-- Review slider goes here -->
            </section>

            <section class="newsletter-signup">
              <h2>Subscribe to Our Newsletter</h2>
              <form>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </section>
          </div>`
  }else{
    itemCategory.textContent = category;
  for (let i = 1; i <= 20; i++) {
    resultContainer.innerHTML += `
      <div class="item">
        <img src="https://ik.imagekit.io/primeassets/image%20Assets/${category}/${category}-${i}.jpg">
        <p class="itemName">${category} - ${i}</p>
        <p class = "price">RS . ${price}</p>
        <button class= "btn2">Add to Cart</button>
      </div>`;
      price += 20
  //   let productContainer = document.createElement("div");
  //   productContainer.classList.add("item");

  //   let productImage = document.createElement("img");
  //   productImage.src = `https://ik.imagekit.io/primeassets/image%20Assets/${category}/${category}-${i}.jpg`;
  //   productContainer.appendChild(productImage);

  //   let productName = document.createElement("p");
  //   productName.classList.add("itemName");
  //   productName.textContent = `${category} - ${i}`;
  //   productContainer.appendChild(productName);

  //   let productPrice = document.createElement("p");
  //   productPrice.classList.add("price");
  //   productPrice.textContent = `RS . ${price}`;
  //   price += 20;
  //   productContainer.appendChild(productPrice);

  //   resultContainer.appendChild(productContainer);
  // 
  }
  }
}

options.forEach(option => {
  option.addEventListener("click", () => {
    document.querySelector(".activesideBar").classList.remove("activesideBar");
    option.classList.add("activesideBar");
    let category = option.textContent.trim();
    getProducts(category);
  });
});

getProducts("Home");