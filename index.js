dodger.style.backgroundColor = "#1775"


document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  });


  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
    
    document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });








  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left2 = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left2 + 1}px`;
    }
  });


  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left2 = parseInt(leftNumbers, 10);
  
    if (left2 < 360) {
        dodger.style.left = `${left2 + 1}px`;
    }
  }
    
    document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });





