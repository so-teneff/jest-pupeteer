(() => {
  console.info("script loader");
  document.addEventListener("DOMContentLoaded", () => {
    console.info("dom loaded");
    const btn = document.querySelector(
      "#root > div > div > div.ToDoInput > button"
    );
    const input = document.querySelector(
      "#root > div > div > div.ToDoInput > input[type=text]"
    );
    btn.addEventListener("click", e => {
      if (!input.value) {
        alert("Please enter a todo!");
      }
    });
  });
})();
