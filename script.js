// const ul1 = document.getElementById("ul-1");
// const ul2 = document.getElementById("ul-2");
// const ul3 = document.getElementById("ul-3");
const firstList1 = document.getElementById("firstList");
const dropdownButton = document.getElementById("dropdown");

dropdownButton.addEventListener("click", () => {
  if (firstList1.style.display === "none") {
    firstList1.style.display = "block";
  } else {
    firstList1.style.display = "none";
  }
});
