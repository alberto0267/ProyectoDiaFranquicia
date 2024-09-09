document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("Formu");
  const pop = document.getElementById("Pop");
  const input = document.getElementById("input");
  console.log("js emparejado");

  const header = document.getElementById('Header');

  form.addEventListener("submit", (event) => {
    console.log("funciona form");
    
    const atSing = input.value.includes('@');
    const dotCom = input.value.includes('.com');
    const dotEs = input.value.includes('.es');

    if (input.value === "" || !atSing || (!dotCom && !dotEs)) {
      event.preventDefault();
      console.log("Entra if");
      pop.style.display = "flex";
    } else {
      console.log("entra else");
      
    
    }
  });
});
// 