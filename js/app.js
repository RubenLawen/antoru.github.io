console.log("Hello World !");

const AllLi = document.querySelectorAll("nav ul li a");
const AllH2 = document.querySelectorAll("h2");

for (let i = 0; i < AllLi.length; i++) {
  const element = AllLi[i];
  // Add events clicks to all li form nav
  element.addEventListener("click", () => {
    console.log("click");
  });
}
