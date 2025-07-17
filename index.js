// This fetches & display all products
function loadProducts() {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById('productList');
      products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
          <div class="card h-100 shadow">
            <img src="${product.image}" class="card-img-top p-3" style="height: 250px; object-fit: contain;" alt="${product.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">GHS ${product.price}</p>
              <a href="product.html?id=${product.id}" class="btn btn-primary mt-auto">View Details</a>
            </div>
          </div>`;
        container.appendChild(col);
      });
    });
}


// This also fetches & display one product based on ID
function loadSingleProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) {
    document.getElementById('productDetails').innerHTML = `<p class="text-danger">Product not found</p>`;
    return;
  }

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(product => {
      const container = document.getElementById('productDetails');
      container.innerHTML = `
        <div class="col-md-6">
          <img src="${product.image}" class="img-fluid single-product-image" alt="${product.title}">
        </div>
        <div class="col-md-6">
          <h2>${product.title}</h2>
          <p class="text-muted">${product.category}</p>
          <h4>GHS ${product.price}</h4>
          <p>${product.description}</p>
          <button class="btn btn-success">Add to Cart</button>
        </div>`;
    });
}

