console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.wav")
let audioTurn = new Audio("ting.mp3")
let gameOver = new Audio("game over.wav")
let turn = "X"
let isGameOver = false



const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}
const checkWin = () => {
    let boxTexts = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerHTML === boxTexts[e[1]].innerHTML) && (boxTexts[e[2]].innerHTML === boxTexts[e[1]].innerHTML) && (boxTexts[e[0]].innerHTML != "")) {
            document.querySelector(".info").innerHTML = boxTexts[e[0]].innerHTML + " Won"
            isGameOver = true
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw"
            music.pause()
            gameOver.play()
        }
    })
}
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(Element => {
    let boxText = Element.querySelector(".boxtext")
    Element.addEventListener("click", () => {
        if (boxText.innerHTML === "") {
            boxText.innerHTML = turn
            turn = changeTurn()
            audioTurn.play()
            checkWin()
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn
            }
        }
    })
})
reset.addEventListener("click", () => {
    let boxTexts = document.querySelectorAll(".boxtext")
    Array.from(boxTexts).forEach(Element => {
        Element.innerHTML = ""
    })
    turn = "X"
    isGameOver = false
    music.play()
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
})
