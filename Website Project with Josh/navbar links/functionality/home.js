// Selecting elements
let postInput = document.getElementById("post");
let submitPostButton = document.getElementById("postButton");
let postDisplay = document.getElementById("postGoesHere");

// Function to add a post
function addPost() {
    // Get the value from the input field
    let userInput = postInput.value;
    
    // Display the user input in the <p> tag
    postDisplay.textContent = userInput;
}

// Adding event listener to the button
if (submitPostButton.addEventListener) {
    submitPostButton.addEventListener("click", addPost, false);
} else if (submitPostButton.attachEvent) {
    submitPostButton.attachEvent('onclick', addPost);
}
