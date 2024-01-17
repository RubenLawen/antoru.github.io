const AllLi = document.querySelectorAll("nav ul li a");
const AllH2 = document.querySelectorAll("h2");

for (let i = 0; i < AllLi.length; i++) {
  const element = AllLi[i];

  element.addEventListener("click", () => {
    for (let index = 0; index < AllH2.length; index++) {}
    if (element.textContent === "Type de nouilles") {
    } else if (element.textContent === "Définition") {
    } else if (element.textContent === "Histoire") {
    } else if (element.textContent === "Préparation") {
    } else {
      console.log("Error: " + element.textContent);
    }
  });
}
