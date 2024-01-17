const AllLi = document.querySelectorAll("nav ul li a");
const AllH2 = document.querySelectorAll("h2");

for (let i = 0; i < AllLi.length; i++) {

  const element = AllLi[i];

  element.addEventListener("click", () => {
    // Remet par default tout les h2
    for (let index = 0; index < AllH2.length; index++) {
      const elementH2 = AllH2[index];
      elementH2.style.color = "#003e5a";
      elementH2.textDecoration = "none";
    }
    // Donne la couleur au h2 de l'artricle selectionné
    for (let index = 0; index < AllH2.length; index++) {}
    if (element.textContent === "Type de nouilles") {
      let selector = document.querySelector("#type h2");
      selector.style.color = "#ff7a13";
      selector.style.textDecoration = "underline";
    } else if (element.textContent === "Définition") {
      let selector = document.querySelector("#definition h2");
      selector.style.color = "#ff7a13";
      selector.style.textDecoration = "underline";
    } else if (element.textContent === "Histoire") {
      let selector = document.querySelector("#histoire h2");
      selector.style.color = "#ff7a13";
      selector.style.textDecoration = "underline";
    } else if (element.textContent === "Préparation") {
      let selector = document.querySelector("#preparation h2");
      selector.style.color = "#ff7a13";
      selector.style.textDecoration = "underline";
    } else {
      console.log("Error: " + element.textContent);
    }
  });
  
}