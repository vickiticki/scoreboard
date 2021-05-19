let score1 = 0
let score2 = 0

function handleTeam1Click(event) {
  const thingClickedOn = event.target

  if (thingClickedOn.classList.contains('add')) {
    score1++
  }
  if (thingClickedOn.classList.contains('subtract')) {
    score1--
  }
  const scoreHeader = document.querySelector('section.team1 h3')

  scoreHeader.textContent = score1
}
function handleTeam2Click(event) {
  const thingClickedOn = event.target

  if (thingClickedOn.classList.contains('add')) {
    score2++
  }
  if (thingClickedOn.classList.contains('subtract')) {
    score2--
  }
  const scoreHeader2 = document.querySelector('section.team2 h3')

  scoreHeader2.textContent = score2
}
function main() {
  // const allButtons = document.querySelectorAll('i')

  // allButtons.forEach(function (button) {
  //   button.addEventListener('click', handleClickSquare)
  // })

  const scoreBoard1 = document.querySelector('section.team1')
  scoreBoard1.addEventListener('click', handleTeam1Click)

  const scoreBoard2 = document.querySelector('section.team2')
  scoreBoard2.addEventListener('click', handleTeam2Click)
}

document.addEventListener('DOMContentLoaded', main)
