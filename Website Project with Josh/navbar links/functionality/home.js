let postInput = document.getElementById("post")
let submitPostButton = document.getElementById("postButton")

function addPost() {
    let postGoesHere = document.getElementById("postGoesHere");
    postGoesHere.value = postInput;
}


if (submitPostButton.addEventListener) {
    submitPostButton.addEventListener("click", addPost(), false);
}
else if (submitPostButton.attachEvent()) {
    submitPostButton.attachEvent('onclick', addPost());
}
else {
    submitPostButton.onclick = addPost();
}