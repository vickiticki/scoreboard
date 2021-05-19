let score1 = 0
let score2 = 0

function handleTeam1Click(event) {
  const thingClickedOn = event.target
  if (score1 === 21 || score2 === 21) {
    console.log('game is over')
    return
  }

  if (thingClickedOn.classList.contains('add')) {
    score1++
  }
  if (thingClickedOn.classList.contains('subtract')) {
    if (score1 === 0) {
      console.log("can't go negative")
      return
    }
    score1--
  }
  const scoreHeader1 = document.querySelector('section.team1 h3')

  scoreHeader1.textContent = score1

  if (score1 >= 21) {
    const header = document.querySelector('h1')
    header.textContent = 'Team 1 wins!'
  }
}
function handleTeam2Click(event) {
  const thingClickedOn = event.target
  if (score2 === 21 || score1 === 21) {
    console.log('game is over')
    return
  }

  if (thingClickedOn.classList.contains('add')) {
    score2++
  }
  if (thingClickedOn.classList.contains('subtract')) {
    if (score2 === 0) {
      console.log("can't go negative")
      return
    }
    score2--
  }
  const scoreHeader2 = document.querySelector('section.team2 h3')

  scoreHeader2.textContent = score2

  if (score2 >= 21) {
    const header = document.querySelector('h1')
    header.textContent = 'Team 2 wins!'
  }
}
function main() {
  const scoreBoard1 = document.querySelector('section.team1')
  scoreBoard1.addEventListener('click', handleTeam1Click)

  const scoreBoard2 = document.querySelector('section.team2')
  scoreBoard2.addEventListener('click', handleTeam2Click)
}

document.addEventListener('DOMContentLoaded', main)
