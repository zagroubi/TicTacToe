// setting variables
let squares = document.querySelectorAll(".sqr")
let xCounter = document.getElementById("counter1")
let oCounter = document.getElementById("counter2")
let congrat = document.getElementById("congrat")
let res = document.getElementById("reset")


// converting the array of squares into a matrix
var matrix = [], i, k=-1;

for (i = 0; i < 9; i++) {
    if (i % 3 === 0) {
        k++;
        matrix[k] = [];
    }

    matrix[k].push(squares[i]);
}

// check win/draw functions
function colWin(){
  let numberOfX;
  let numberOfO;
  for (let i=0;i<3;i++){
    numberOfX = 0
    numberOfO = 0
    for (let j=0;j<3;j++){
      if (matrix[j][i].className == "sqr x"){
        numberOfX++
      }else if (matrix[j][i].className == "sqr o"){
        numberOfO++
      }
    }
    if (numberOfX == 3){
      waitIdiot()
      matrix[0][i].style.backgroundColor = "yellow"
      matrix[1][i].style.backgroundColor = "yellow"
      matrix[2][i].style.backgroundColor = "yellow"
      /* this block of code should be in a function but it is ok now*/
      xCounter.innerHTML = parseInt(xCounter.innerHTML) + 1
      congrat.innerHTML = "X WINS"
      congrat.style="opacity:1;"
      setTimeout(() => {reset()}, 1000);
      return true

    }else if (numberOfO == 3){
      waitIdiot()
      matrix[0][i].style.backgroundColor = "yellow"
      matrix[1][i].style.backgroundColor = "yellow"
      matrix[2][i].style.backgroundColor = "yellow"

      oCounter.innerHTML = parseInt(oCounter.innerHTML) + 1
      congrat.innerHTML = "O WINS"
      congrat.style="opacity:1;"
      setTimeout(() => {reset()}, 1000);
      return true
    }
  }

}
function rowWin(){
  let numberOfX;
  let numberOfO;
  for (let i=0;i<3;i++){
    numberOfX = 0
    numberOfO = 0
    for (let j=0;j<3;j++){
      if (matrix[i][j].className == "sqr x"){
        numberOfX++
      }else if (matrix[i][j].className == "sqr o"){
        numberOfO++
      }
    }
    if (numberOfX == 3){
      waitIdiot()
      matrix[i][0].style.backgroundColor = "yellow"
      matrix[i][1].style.backgroundColor = "yellow"
      matrix[i][2].style.backgroundColor = "yellow"
      /* this block of code should be in a function but it is ok now*/
      xCounter.innerHTML = parseInt(xCounter.innerHTML) + 1
      congrat.innerHTML = "X WINS"
      congrat.style="opacity:1;"
      setTimeout(() => {reset()}, 1000);
      return true

    }else if (numberOfO == 3){
      waitIdiot()
      matrix[i][0].style.backgroundColor = "yellow"
      matrix[i][1].style.backgroundColor = "yellow"
      matrix[i][2].style.backgroundColor = "yellow"

      oCounter.innerHTML = parseInt(oCounter.innerHTML) + 1
      congrat.innerHTML = "O WINS"
      congrat.style="opacity:1;"
      setTimeout(() => {reset()}, 1000);
      return true
    }
  }
}
function mainDiagWin(){
  let numberOfX = 0;
  let numberOfO = 0;
  for (let i=0;i<3;i++){
    if (matrix[i][i].className == "sqr x"){
      numberOfX++
    }
    if (matrix[i][i].className == "sqr o"){
      numberOfO++
    }
  }
  if (numberOfX == 3){
    waitIdiot()
    matrix[0][0].style.backgroundColor = "yellow"
    matrix[1][1].style.backgroundColor = "yellow"
    matrix[2][2].style.backgroundColor = "yellow"
    /* this block of code should be in a function but it is ok now*/
    xCounter.innerHTML = parseInt(xCounter.innerHTML) + 1
    congrat.innerHTML = "X WINS"
    congrat.style="opacity:1;"
    setTimeout(() => {reset()}, 1000);
    return true

  }else if (numberOfO == 3){
    waitIdiot()
    matrix[0][0].style.backgroundColor = "yellow"
    matrix[1][1].style.backgroundColor = "yellow"
    matrix[2][2].style.backgroundColor = "yellow"

    oCounter.innerHTML = parseInt(oCounter.innerHTML) + 1
    congrat.innerHTML = "O WINS"
    congrat.style="opacity:1;"
    setTimeout(() => {reset()}, 1000);
    return true
  }
}
function secDiagWin(){
  let numberOfX = 0;
  let numberOfO = 0;
  for (let i=0;i<3;i++){
    if (matrix[i][2-i].className == "sqr x"){
      numberOfX++
    }
    if (matrix[i][2-i].className == "sqr o"){
      numberOfO++
    }
  }
  if (numberOfX == 3){
    waitIdiot()
    matrix[0][2].style.backgroundColor = "yellow"
    matrix[1][1].style.backgroundColor = "yellow"
    matrix[2][0].style.backgroundColor = "yellow"
    /* this block of code should be in a function but it is ok now*/
    xCounter.innerHTML = parseInt(xCounter.innerHTML) + 1
    congrat.innerHTML = "X WINS"
    congrat.style="opacity:1;"
    setTimeout(() => {reset()}, 1000);
    return true

  }else if (numberOfO == 3){
    waitIdiot()
    matrix[0][2].style.backgroundColor = "yellow"
    matrix[1][1].style.backgroundColor = "yellow"
    matrix[2][0].style.backgroundColor = "yellow"

    oCounter.innerHTML = parseInt(oCounter.innerHTML) + 1
    congrat.innerHTML = "O WINS"
    congrat.style="opacity:1;"
    setTimeout(() => {reset()}, 1000);
    return true
  }
}
function draw(){
  if (toCheck == 0 && !colWin() && !rowWin() && !mainDiagWin() && !secDiagWin()){
    congrat.innerHTML = "DRAW"
    congrat.style = "opacity:1;"
    setTimeout(() => {reset()}, 1000);
  }
}
function waitIdiot(){
  squares.forEach(function(e){
    e.style = "pointer-events: none;"
  })
}
function reset(){
  squares.forEach(function(e){
    e.className = "sqr"
    e.style = "pointer-events: auto;"
    congrat.style="opacity:0;"
  })
  toCheck = 9
}

let toCheck = 9
squares.forEach(function(e){
    e.addEventListener("click",function(){
      if (toCheck % 2 != 0){
        e.classList.add("x")
        e.style = "pointer-events: none;"
        toCheck--
      }else {
        e.classList.add("o")
        e.style = "pointer-events: none;"
        toCheck--
      }
      if (toCheck == 0 && (rowWin() || colWin() || mainDiagWin() || secDiagWin())){
        xCounter.innerHTML = parseInt(xCounter.innerHTML) //this line is made by faith :)
      }else if (toCheck == 0){
        draw()
      }else {
        rowWin()
        colWin()
        secDiagWin()
        mainDiagWin()
      }
    })
})

res.onclick = ()=> location.reload()
