console.log("this is separated js file");

// option - 2
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option - 3
const makeBlueButton = document.getElementById("make-blue");
// console.log(makeBlueButton)
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3 another
const purpleButton = document.getElementById('make-purple');
      // console.log(purpleButton)

      purpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor = 'purple';
        
      }

    //   option 4
    const pinkButton = document.getElementById('make-pink');
      // console.log(pinkButton)
      pinkButton.addEventListener('click', makePink);

      function makePink(){
        document.body.style.backgroundColor = 'pink';
      }

    //   option 4 another
    const makeGreenButton = document.getElementById('make-green');
      // console.log(makeGreenButton)
      makeGreenButton.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green';
            })
      