var count = 3;
var countLikes = document.querySelector(".likes p");

function addLikes() {
    count++;
    countLikes.innerText = count + " like(s)";
    console.log(count);
}