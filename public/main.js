let score1 = 0
let score2 = 0
let sets1 = 0
let sets2 = 0
totalSets = 1

function handleTeam1Click(event) {
  const thingClickedOn = event.target
  if (score1 === 25 || score2 === 25) {
    console.log('set is over')
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

  if (score1 >= 25) {
    const header = document.querySelector('h1')
    header.textContent = 'Team 1 wins set!'

    sets1++
    const setsDisplay = document.querySelector('section.team1 h4')
    setsDisplay.textContent = `Sets won: ${sets1}`
  }

  if (sets1 === 3) {
    const header = document.querySelector('h1')
    header.textContent = 'Team 1 Wins Match!'

    const gameOver = document.querySelector('header h2')
    gameOver.textContent = 'Press Reset for new match.'
  }
}

function handleTeam2Click(event) {
  const thingClickedOn = event.target
  if (score2 === 25 || score1 === 25) {
    console.log('set is over')
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

  if (score2 >= 25) {
    const header = document.querySelector('h1')
    header.textContent = 'Team 2 wins set!'

    sets2++
    const setsDisplay = document.querySelector('section.team2 h4')
    setsDisplay.textContent = `Sets won: ${sets2}`
  }
  if (sets2 === 3) {
    const header = document.querySelector('h1')
    header.textContent = 'Team 2 Wins Match!'

    const gameOver = document.querySelector('header h2')
    gameOver.textContent = 'Press Reset for new match.'
  }
}

function updateTeam1Name(event) {
  const team1Name = document.querySelector('.team1 h2')
  team1Name.textContent = event.target.value
  console.log(event.target.value)
  console.log(event)
}

function updateTeam2Name(event) {
  const team2Name = document.querySelector('.team2 h2')
  team2Name.textContent = event.target.value
  console.log(event.target.value)
  console.log(event)
}
function resetGame(event) {
  score1 = 0
  const scoreHeader1 = document.querySelector('section.team1 h3')

  scoreHeader1.textContent = score1

  score2 = 0
  const scoreHeader2 = document.querySelector('section.team2 h3')

  scoreHeader2.textContent = score2
  const header = document.querySelector('h1')
  header.textContent = 'My Score Board'
  const setsDisplay = document.querySelector('header h4')
  setsDisplay.textContent = 'Set: 1'
  // sets1 = 0
  // const setsDisplay = document.querySelector('section.team1 h4')
  // setsDisplay.textContent = `Sets won: ${sets1}`
  // sets2 = 0
  // const setsDisplay = document.querySelector('section.team2 h4')
  // setsDisplay.textContent = `Sets won: ${sets2}`
}

function nextSet(event) {
  if (sets1 === 3 || sets2 === 3) {
    console.log('Match over')
    return
  }

  totalSets++
  const setsHeader = document.querySelector('header h4')
  setsHeader.textContent = `Sets: ${totalSets}`

  score1 = 0
  const scoreHeader1 = document.querySelector('section.team1 h3')

  scoreHeader1.textContent = score1

  score2 = 0
  const scoreHeader2 = document.querySelector('section.team2 h3')

  scoreHeader2.textContent = score2
  const header = document.querySelector('h1')
  header.textContent = 'My Score Board'
}

function main() {
  const scoreBoard1 = document.querySelector('section.team1')
  scoreBoard1.addEventListener('click', handleTeam1Click)

  const scoreBoard2 = document.querySelector('section.team2')
  scoreBoard2.addEventListener('click', handleTeam2Click)

  document
    .querySelector('.team1 input')
    .addEventListener('input', updateTeam1Name)

  document
    .querySelector('.team2 input')
    .addEventListener('input', updateTeam2Name)

  document.querySelector('.reset').addEventListener('click', resetGame)

  document.querySelector('.next').addEventListener('click', nextSet)
}

document.addEventListener('DOMContentLoaded', main)
