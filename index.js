var colors = generateRandomColors(numSquares);
var correct = correctColor();
var hardButton = document.querySelector('#hardBtn')
var easyButton = document.querySelector('#easyBtn')
var squares = document.querySelectorAll('.square')
var displayGoal = document.querySelector('#displayGoal')
var messageDisplay = document.querySelector('#statusDisplay')
var title = document.querySelectorAll('#title')
var h1 = document.querySelector('#title')
var resetColorsButton = document.querySelector('#newColorsButton');
var numSquares = 6;




// Initial colors looping through squares variable
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
    squares[i].style.transition = '1000ms';
    // add CLICK LISTENERS to Squares
    squares[i].addEventListener('click', function () {
        // define variable for clicked square
        var clickedColor = this.style.backgroundColor;
        
        // if correct color is selected 
        if (clickedColor === correct) {
            messageDisplay.textContent = 'CORRECT';
            resetColorsButton.textContent = 'PLAY AGAIN'
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            

        }

        // if incorrect color is selected
        else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'WRONG';
           
    }
        });
}


easyButton.addEventListener('click', 
function(){
    easyButton.classList.add('selected')
    hardButton.classList.remove('selected')
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    correct = correctColor()
    displayGoal.textContent = correct;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = 'none'; 
        }
    }
})

hardButton.addEventListener('click', function(){
    hardButton.classList.add('selected')
    easyButton.classList.remove('selected')
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    correct = correctColor()
    for(var i = 0; i < squares.length; i++){
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];
    }

})




// reset button on navbar
resetColorsButton.addEventListener('click', function(){
    reset();
});
   


// displays picked color in the header
displayGoal.textContent = correct;



// f u n c t i o n s



// Change all squares to the selected winning color
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

// Generating a randomizer for generateRandomColors to loop through
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// defining random color to match up with 'correct' variable
function correctColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// defining function to match with 'colors" variable
function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
    
function reset(){
    colors = generateRandomColors(numSquares);
    correct = correctColor();
    displayGoal.textContent = correct;
    messageDisplay.textContent = '';
    this.textContent = 'NEW COLORS';
    h1.style.backgroundColor = 'steelblue';
    for(var i = 0; i < 6; i++){
        squares[i].style.backgroundColor = colors[i];
    }
}

    