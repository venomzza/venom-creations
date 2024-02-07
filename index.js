window.addEventListener("load", () => {
    let paths = document.querySelectorAll("path");
    for (let i = 0; i < paths.length; i++){
      let path = paths[i];
      path.addEventListener("mouseenter", () => {
        let tooltip = document.querySelector("#tooltip");
        tooltip.textContent = `Classes: ${path.classList}`;
      });
    }
  
    setInterval(() => {
      let element = document.querySelector(".rose");
      element.classList.remove("animated");
      setTimeout(() => {
        element.classList.add("animated");
      }, 100);
    }, 2000);
  });
  