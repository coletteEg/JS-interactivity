// console.log("Hello World!")

// let addMovie = (event) => {
//     event.preventDefault()
//     let inputField = document.getElementById("s").value
//     let movie = document.createElement("li")
//     let movieTitle= document.createElement("span")
//     movieTitle.textContent = inputField.value
//     movie.appendChild(movieTitle)
//     deleteBtn = document.createElement("button")
//     deleteBtn.textContent = "x"
//     deleteBtn.addEventListener("click", deleteMovie)
//     document.querySelector("ul").appendChild(movie)
//     inputField = " "
// }
// document.querySelector("form").addEventListener("submit", addMovie)
// let deleteMovie = (event) => {
//     event.target.parentNode.remove()
// }
console.log("hello world")
let message = document.querySelector("#message")
// let mainTag = document.querySelector("main")
// console.log(mainTag)
// mainTag.innerHTML = "<h1>Movie List</h1>"
function addMovie(event){
    event.preventDefault()
    // let inputField = document.getElementById("s").value;
    let inputField = document.querySelector("input")
    console.log(inputField.value)
    let movie = document.createElement("li");
    console.log(movie)
    let movieTitle = document.createElement("span")
    movieTitle.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputField.value
    console.log(movieTitle)
    movie.appendChild(movieTitle)
    deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector("ul").appendChild(movie)
    inputField.value = ""
}
document.querySelector("form").addEventListener('submit', addMovie)

let deleteMovie = event => {
    message.textContent= "Movie deleted!"
    event.target.parentNode.remove()
    
}
let crossOffMovie = (event) => {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")){
        message.textContent="Movie Watched!"
    }else {
        message.textContent="Movie added back!"
    }
}