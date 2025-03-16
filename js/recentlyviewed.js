// Functions for Recently Viewed Products

// Save product to recently viewed list when viewing product details
function saveToRecentlyViewed() {
    // Get current product from session storage (already implemented in your code)
    const stringSP = sessionStorage.getItem("TTCT_SP");
    
    if (!stringSP) return;
    
    const currentProduct = JSON.parse(stringSP);
    
    // Get existing recently viewed products from localStorage
    let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewedProducts")) || [];
    
    // Check if product is already in the list
    const existingIndex = recentlyViewed.findIndex(product => product.ten === currentProduct.ten);
    
    // If it exists, remove it (so we can add it to the front)
    if (existingIndex > -1) {
      recentlyViewed.splice(existingIndex, 1);
    }
    
    // Create a simplified version of the product to store
    const productToSave = {
      ten: currentProduct.ten,
      gia: currentProduct.gia,
      hinhanh: currentProduct.hinhanh && currentProduct.hinhanh.length > 0 ? currentProduct.hinhanh[0] : "",
      id: currentProduct.id
    };
    
    // Add to the beginning of the array
    recentlyViewed.unshift(productToSave);
    
    // Limit to 4 items
    if (recentlyViewed.length > 4) {
      recentlyViewed = recentlyViewed.slice(0, 4);
    }
    
    // Save back to localStorage
    localStorage.setItem("recentlyViewedProducts", JSON.stringify(recentlyViewed));
  }
  
  // Add container for recently viewed products
  function addRecentlyViewedContainer() {
    const main = document.querySelector('main');
    if (main) {
      // Check if container already exists
      if (!document.getElementById('recentlyViewedContainer')) {
        const container = document.createElement('div');
        container.id = 'recentlyViewedContainer';
        container.className = 'recently-viewed-section';
        container.style.cssText = 'margin-top: 40px; padding: 20px;';
        main.appendChild(container);
      }
    }
  }
  
  // Display recently viewed products
  function displayRecentlyViewed() {
    const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewedProducts")) || [];
    
    // Add the container if needed
    addRecentlyViewedContainer();
    
    // If no recently viewed products, return
    if (recentlyViewed.length === 0) {
      return;
    }
    
    // Get container
    const container = document.getElementById("recentlyViewedContainer");
    if (!container) return;
    
    // Clear previous content
    container.innerHTML = '';
    
    // Create section title
    const title = document.createElement("h3");
    title.textContent = "Sản phẩm đã xem gần đây";
    title.className = "recently-viewed-title";
    title.style.cssText = 'color: #2196F3; font-size: 24px; margin-bottom: 20px; position: relative; padding-bottom: 10px;';
    container.appendChild(title);
    
    // Add underline to title
    const underline = document.createElement("div");
    underline.style.cssText = 'position: absolute; bottom: 0; left: 0; width: 60px; height: 3px; background-color: #2196F3;';
    title.appendChild(underline);
    
    // Create products row
    const row = document.createElement("div");
    row.className = "rowProducts";
    row.style.cssText = 'display: flex; flex-wrap: wrap; gap: 20px;';
    
    // Add products to row
    recentlyViewed.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product recently-viewed-product';
      productDiv.style.cssText = 'transition: transform 0.3s ease; cursor: pointer; width: calc(25% - 20px); min-width: 200px;';
      
      productDiv.innerHTML = `
        <div>
          <div class='productImg' style="text-align: center;">
            <img src='${product.hinhanh}' alt='' style="max-width: 100%; height: auto;">
          </div>
          <h3 class='productTen' style="margin-top: 10px;">${product.ten}</h3>
          <div class='productGia' style="color: #e91e63; font-weight: bold;">${product.gia}<sup>đ</sup></div>
        </div>
      `;
      
      // Add click event
      productDiv.addEventListener('click', function() {
        sessionStorage.setItem("TTCT_SP", JSON.stringify(product));
        window.location.href = "chitietsanpham.html";
      });
      
      row.appendChild(productDiv);
    });
    
    // Add row to container
    container.appendChild(row);
  }
  
  // Add CSS for recently viewed products
  function addRecentlyViewedCSS() {
    const style = document.createElement('style');
    style.textContent = `
      .recently-viewed-section {
        margin-top: 40px;
        padding: 20px;
        border-radius: 10px;
        background-color: var(--card-bg, #fff);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      
      .recently-viewed-title {
        position: relative;
        color: #2196F3;
        font-size: 24px;
        margin-bottom: 20px;
        padding-bottom: 10px;
      }
      
      .recently-viewed-title:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background-color: #2196F3;
      }
      
      .recently-viewed-product {
        transition: transform 0.3s ease;
      }
      
      .recently-viewed-product:hover {
        transform: translateY(-5px);
      }
    `;
    document.head.appendChild(style);
  }
  
  // Initialize
  document.addEventListener("DOMContentLoaded", function() {
    // Add CSS
    addRecentlyViewedCSS();
    
    // Check if we're on product details page
    if (window.location.href.includes("chitietsanpham.html")) {
      setTimeout(saveToRecentlyViewed, 500); // Delay to ensure product data is loaded
    }
    
    // Display recently viewed products if on home page or product details page
    if (window.location.href.includes("trangchu.html") || 
        window.location.href.includes("chitietsanpham.html")) {
      setTimeout(displayRecentlyViewed, 800); // Delay to ensure all content is loaded
    }
  });
  // Functions for Recently Viewed Products

// Save product to recently viewed list when viewing product details
function saveToRecentlyViewed() {
  // Get current product from session storage (already implemented in your code)
  const stringSP = sessionStorage.getItem("TTCT_SP");
  
  if (!stringSP) return;
  
  const currentProduct = JSON.parse(stringSP);
  
  // Get existing recently viewed products from localStorage
  let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewedProducts")) || [];
  
  // Check if product is already in the list
  const existingIndex = recentlyViewed.findIndex(product => product.ten === currentProduct.ten);
  
  // If it exists, remove it (so we can add it to the front)
  if (existingIndex > -1) {
    recentlyViewed.splice(existingIndex, 1);
  }
  
  // Create a simplified version of the product to store
  const productToSave = {
    ten: currentProduct.ten,
    gia: currentProduct.gia,
    hinhanh: currentProduct.hinhanh && currentProduct.hinhanh.length > 0 ? currentProduct.hinhanh[0] : "",
    id: currentProduct.id
  };
  
  // Add to the beginning of the array
  recentlyViewed.unshift(productToSave);
  
  // Limit to 4 items
  if (recentlyViewed.length > 4) {
    recentlyViewed = recentlyViewed.slice(0, 4);
  }
  
  // Save back to localStorage
  localStorage.setItem("recentlyViewedProducts", JSON.stringify(recentlyViewed));
}

// Add container for recently viewed products
function addRecentlyViewedContainer() {
  const main = document.querySelector('main');
  if (main) {
    // Check if container already exists
    if (!document.getElementById('recentlyViewedContainer')) {
      const container = document.createElement('div');
      container.id = 'recentlyViewedContainer';
      container.className = 'recently-viewed-section';
      container.style.cssText = 'margin-top: 40px; padding: 20px;';
      main.appendChild(container);
    }
  }
}

// Display recently viewed products
function displayRecentlyViewed() {
  const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewedProducts")) || [];
  
  // Add the container if needed
  addRecentlyViewedContainer();
  
  // If no recently viewed products, return
  if (recentlyViewed.length === 0) {
    return;
  }
  
  // Get container
  const container = document.getElementById("recentlyViewedContainer");
  if (!container) return;
  
  // Clear previous content
  container.innerHTML = '';
  
  // Create section title
  const title = document.createElement("h3");
  title.textContent = "Sản phẩm đã xem gần đây";
  title.className = "recently-viewed-title";
  title.style.cssText = 'color: #2196F3; font-size: 24px; margin-bottom: 20px; position: relative; padding-bottom: 10px;';
  container.appendChild(title);
  
  // Add underline to title
  const underline = document.createElement("div");
  underline.style.cssText = 'position: absolute; bottom: 0; left: 0; width: 60px; height: 3px; background-color: #2196F3;';
  title.appendChild(underline);
  
  // Create products row
  const row = document.createElement("div");
  row.className = "rowProducts";
  row.style.cssText = 'display: flex; flex-wrap: wrap; gap: 20px;';
  
  // Add products to row
  recentlyViewed.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product recently-viewed-product';
    productDiv.style.cssText = 'transition: transform 0.3s ease; cursor: pointer; width: calc(25% - 20px); min-width: 200px;';
    
    productDiv.innerHTML = `
      <div>
        <div class='productImg' style="text-align: center;">
          <img src='${product.hinhanh}' alt='' style="max-width: 100%; height: auto;">
        </div>
        <h3 class='productTen' style="margin-top: 10px;">${product.ten}</h3>
        <div class='productGia' style="color: #e91e63; font-weight: bold;">${product.gia}<sup>đ</sup></div>
      </div>
    `;
    
    // Add click event
    productDiv.addEventListener('click', function() {
      sessionStorage.setItem("TTCT_SP", JSON.stringify(product));
      window.location.href = "chitietsanpham.html";
    });
    
    row.appendChild(productDiv);
  });
  
  // Add row to container
  container.appendChild(row);
}

// Add CSS for recently viewed products
function addRecentlyViewedCSS() {
  const style = document.createElement('style');
  style.textContent = `
    .recently-viewed-section {
      margin-top: 40px;
      padding: 20px;
      border-radius: 10px;
      background-color: var(--card-bg, #fff);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .recently-viewed-title {
      position: relative;
      color: #2196F3;
      font-size: 24px;
      margin-bottom: 20px;
      padding-bottom: 10px;
    }
    
    .recently-viewed-title:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: #2196F3;
    }
    
    .recently-viewed-product {
      transition: transform 0.3s ease;
    }
    
    .recently-viewed-product:hover {
      transform: translateY(-5px);
    }
  `;
  document.head.appendChild(style);
}

// Initialize
document.addEventListener("DOMContentLoaded", function() {
  // Add CSS
  addRecentlyViewedCSS();
  
  // Check if we're on product details page
  if (window.location.pathname.includes("chitietsanpham.html")) {
    setTimeout(saveToRecentlyViewed, 500); // Delay to ensure product data is loaded
  }
  
  // Display recently viewed products if on home page or product details page
  if (window.location.pathname.includes("trangchu.html") || 
      window.location.pathname.includes("chitietsanpham.html")) {
    setTimeout(displayRecentlyViewed, 800); // Delay to ensure all content is loaded
  }
});