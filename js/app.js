// const menuBtn = document.getElementById('menu-btn')
// const menu = document.querySelector('.mainMenu')

const footer = document.querySelector(".footer");
const card = document.querySelector(".card");

// menuBtn.addEventListener('click', function(){
//     menu.classList.toggle('mainMenu--active')
// })

window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    // you're at the bottom of the page
    console.log("Bottom of page");
    footer.classList.remove("footer--hide");
  }
};

document.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    footer.classList.add("footer--hide");
    card.classList.add("logo--hide");
  } else if (
    window.innerHeight + window.scrollY >=
    document.body.scrollHeight
  ) {
    footer.classList.remove("footer--hide");
    console.log("bottom");
  } else {
    footer.classList.remove("footer--hide");
    card.classList.remove("logo--hide");
  }
});

// let hanoi = function(disc, src, aux, dst) {
//     if(disc > 0) {
//     hanoi(disc - 1, src, dst, aux);
//     console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
//     hanoi(disc -1, aux, src, dst)
//     }
// }
// hanoi(3, 'Src', 'Aux', 'Dst')
