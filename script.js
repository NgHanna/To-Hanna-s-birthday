//Önskelistan
document.addEventListener("DOMContentLoaded", function() {
    const wishList = document.getElementById("wish-list");
    const boughtItem = document.getElementById("bought-item");
  
    const buyButtons = document.querySelectorAll(".buy-btn");
  
    buyButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const listItem = this.parentElement;
        boughtItem.style.display = "block";
        listItem.remove();
      });
    });
  });
//Slutet av önskelistan