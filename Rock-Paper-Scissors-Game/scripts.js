//Get to DOM elements
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelector(".option_image");

optionImages.forEach((image, inedx) =>{
  image.addEventListener("click", () =>{
    image.classList.add("active");
  })
})
