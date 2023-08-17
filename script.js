// const ul1 = document.getElementById("ul-1");
// const ul2 = document.getElementById("ul-2");
// const ul3 = document.getElementById("ul-3");
const firstList = document.getElementById('firstList');
const secondList = document.getElementById('secondList');
const thirdList = document.getElementById('thirdList');
const dropdownButton = document.getElementById('dropdown');
const dropdownButton2 = document.getElementById('dropdown2');
const dropdownButton3 = document.getElementById('dropdown3');

function dropdownHandler(el, target) {
  el.addEventListener('click', () => {
    target.style.display === 'none'
      ? (target.style.display = 'block')
      : (target.style.display = 'none');
  });
}

dropdownHandler(dropdownButton, firstList);
dropdownHandler(dropdownButton2, secondList);
dropdownHandler(dropdownButton3, thirdList);

// dropdownButton.addEventListener('click', () => {
//   if (firstList.style.display === 'none') {
//     firstList.style.display = 'block';
//   } else {
//     firstList.style.display = 'none';
//   }
// });
// dropdownButton2.addEventListener('click', () => {
//   if (secondList.style.display === 'none') {
//     secondList.style.display = 'block';
//   } else {
//     secondList.style.display = 'none';
//   }
// });
// dropdownButton3.addEventListener('click', () => {
//   if (thirdList.style.display === 'none') {
//     thirdList.style.display = 'block';
//   } else {
//     thirdList.style.display = 'none';
//   }
// });
