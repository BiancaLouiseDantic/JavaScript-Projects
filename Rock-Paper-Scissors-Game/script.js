//Get to DOM elements
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

//Loop thrpugh each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");


    //Loop through each option image again
    optionImages.forEach((image2, index2) => {
      //if the current index doesn't match the clicked index
      //Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });
    console.log(e.target)
  });
});

  // Set a timeout to delay the result calculation




  // Get the source of the clicked option image


  // Set the user image to the clicked option image


   // Generate a random number between 0 and 2


   // Create an array of CPU image options