const title = document.getElementById("Movie_Title")
const desc = document.getElementById("description")
const rating = document.getElementById("rating")
const btn = document.getElementById("suggest")

const list = {
    0 : ["Kill" , "Action", 7.6],
    1 : [ "Shekhar Home", "Suspense, Mystery, Dectective", 8.2],
    2 : [ "Atlas","Sci-Fi, Action, Adventure", 6.0],
    3 : [ "Khel Khel Mein", "Comedy", 7.1],
    4 : [ "Pill", "Crime, Thriller", 8],
    5 : ["Stree 2", "Horror, Comedy", 7.7],
    6 : [ "John Wick", "Action, Crime, Thriller", 7.4],
    7 : [ "The First Responders", "Action, Drama, Adventure, Thriller, Comedy", 8.1],
    8 : [ "Red Notice", "Action, Comedy, Thriller", 6.5],
    9 : [ "Adam Project", "Action, Sci-Fi, Adventure, Comedy", 6.7],
    10: [ "Free Guy", "Action, Sci-Fi, Adventure, Comedy, Gaming", 7.1]

}

let get_movie = () =>{
    let l = Object.keys(list).length
    let n = Math.floor(Math.random() * l)
    title.textContent = `Movie -> ${(list[n][0])}`
    desc.textContent = `Genre -> ${(list[n][1])}`
    rating.textContent = `IMDB Rating -> ${(list[n][2])}`
}

btn.addEventListener("click",get_movie)

