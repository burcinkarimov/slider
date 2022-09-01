const images = document.querySelectorAll(".img_min");
const next = document.querySelector(".next");
const reset = document.querySelector(".reset");
const prev = document.querySelector(".prev");
const max = document.querySelector(".img_max");

let count = 1;
let len = images.length;

function nextFunction () {
  for (let i = 0; i < count; i++) {
    if (i < len - 1) {
      images[i].classList.remove("active_img"); 
      images[i+1].classList.add("active_img"); 
      max.setAttribute("src", `./assets/${i+1}.png`);
    } else if (count >= len - 1) {
      images[(i % len)].classList.remove("active_img");
      images[(i + 1) % len].classList.add("active_img");
      max.setAttribute("src", `./assets/${(i + 1) % len}.png`);
    }
  }
  count++; 
}


function prevFunction () {  
  for (let i = count; i >= 0; i--) {
    if (i >= 2) {
      images[(i-1)%len].classList.remove("active_img");
      images[(count-2)%len].classList.add("active_img");
      max.setAttribute("src", `./assets/${(count-2)%len}.png`);
    } 
    else if (count < 2) {
      images[count-1].classList.remove("active_img");
      images[(count%len) + 4].classList.add("active_img");
      max.setAttribute("src", `./assets/${(count%len) + 4}.png`);
      count = count + len;
    }
  }
  count--;
}

function resetFunction () {
  for (let i = 0; i < len; i++) {
    if (images[i].classList.contains("active_img")) {
      images[i].classList.remove("active_img");
    }
    images[0].classList.add("active_img");
    max.setAttribute("src", `./assets/0.png`);
  }
  count = 1;
}

next.onclick = nextFunction;
prev.onclick = prevFunction;
reset.onclick = resetFunction; 