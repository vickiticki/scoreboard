let score = 0

function handleTeam1Click(event) {
  const thingClickedOn = event.target

  if (thingClickedOn.classList.contains('add')) {
    score++
  }
  if (thingClickedOn.classList.contains('subtract')) {
    score--
  }
  const scoreHeader = document.querySelector('h3')

  scoreHeader.textContent = score
}

function main() {
  // const allButtons = document.querySelectorAll('i')

  // allButtons.forEach(function (button) {
  //   button.addEventListener('click', handleClickSquare)
  // })

  const scoreBoard = document.querySelector('section.team1')
  scoreBoard.addEventListener('click', handleTeam1Click)
}

document.addEventListener('DOMContentLoaded', main)
