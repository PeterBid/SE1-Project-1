function init() {

  //---GlOBAL VARIABLES---//

  //--Global Variables for Grid--//

  //global variables for grid
  const grid = document.querySelector('.grid')
  const width = 10
  const cellCount = width * width //this makes the total cells in the grid i.e width 10 = 100 cells
  const cells = []

  //--Global Variables for Topbar--//

  //global variables for Scores
  let score = 0
  let lives = 3
  let highScore = 0




  //--Global Variables for Timer--//

  let timeInGame = 0

  //--ELEMENT SELECTORS--//

  //element selectors for Topbar
  const selectStart = document.querySelector('#start')
  let selectReset = document.querySelector('#reset')
  let selectHighScoreReset = document.querySelector('#highscorereset')
  const selectLives = document.querySelector('#lives')
  const selectScore = document.querySelector('#score')
  const selectTimeLeft = document.querySelector('#timeleft')
  const selectHighScore = document.querySelector('#highscore')

  //element selectors for Music
  const shuffleAudio = document.querySelector('#target-audio')
  const hitAudio = document.querySelector('#hit-audio')
  const timeOutAudio = document.querySelector('#timeout-audio')
  const gameOverLoseAudio = document.querySelector('#gameoverlose-audio')
  const gameOverWinAudio = document.querySelector('#gameoverwin-audio')
  const homeReachedAudio = document.querySelector('#homereached-audio')
  const birdRidingAudio = document.querySelector('#birdriding-audio')


  //element selectors for TimeBar
  const bar = document.querySelector('.bar')

  //--UPDATING PARAMETERS--//

  //updating the parameters in the Topbar
  selectLives.innerHTML = `Lives: ${lives}`
  selectScore.innerHTML = `Score: ${score}`
  selectTimeLeft.innerHTML = `Time Left: ${40 - timeInGame}` //Make This Whatever Time You Set - Time in Game so Time Left Decreases
  selectHighScore.innerHTML = `HighScore: ${highScore}`


  //--Global Variables for Home and Vivi Character--//

  //global variables for Home Positions

  const homeClass = 'home'
  const viviHomeClass = 'vivihome'

  const home1Postion = 1 //this home position refers to an index
  const home2Position = 4 //this home position refers to an index
  const home3Position = 5 //this home position refers to an index
  const home4Position = 8 //this home position refers to an index



  //global variables for Vivi Character
  const viviClass = 'vivi'

  const viviStartPosition = 94 //this starting position refers to an index
  let viviCurrentPosition = 94 //vivi’s current position refers to an index




  //--Global Variables for Obstacles going Left--//

  //global variables for Cactus Obstacles
  const cactusClass = 'cactus'

  const cactusStartPosition = 89 //this starting position refers to an index
  let cactusCurrentPosition = 89 //cactus current position refers to an index

  const cactus2StartPosition = 87 //this starting position refers to an index
  let cactus2CurrentPosition = 87 //cactus2 current position refers to an index

  //global variables for Orc Obstacles
  const orcClass = 'orc'

  const orcStartPosition = 28 //this starting position refers to an index
  let orcCurrentPosition = 28 //orc current position refers to an index

  const orc2StartPosition = 21 //this starting position refers to an index
  let orc2CurrentPosition = 21 //orc current position refers to an index

  const orc3StartPosition = 22 //this starting position refers to an index
  let orc3CurrentPosition = 22 //orc current position refers to an index

  const orc4StartPosition = 23 //this starting position refers to an index
  let orc4CurrentPosition = 23 //orc current position refers to an index

  const orc5StartPosition = 24 //this starting position refers to an index
  let orc5CurrentPosition = 24 //orc current position refers to an index

  const orc6StartPosition = 25 //this starting position refers to an index
  let orc6CurrentPosition = 25 //orc current position refers to an index

  const orc7StartPosition = 26 //this starting position refers to an index
  let orc7CurrentPosition = 26 //orc current position refers to an index

  const orc8StartPosition = 27 //this starting position refers to an index
  let orc8CurrentPosition = 27 //orc current position refers to an index



  //--Global Variables for Obstacles going Right--//

  //global variables for Tomberry Obstacles
  const tomberryClass = 'tomberry'

  const tomberryStartPosition = 71 //this starting position refers to an index
  let tomberryCurrentPosition = 71 //tomberry current position refers to an index

  const tomberry2StartPosition = 73 //this starting position refers to an index
  let tomberry2CurrentPosition = 73 //tomberry2 current position refers to an index



  //--Global Variables for Bird and Riding--//

  //global variables for Bird Obstacles
  const birdClass = 'bird'

  const birdStartPosition = 30 //this starting position refers to an index
  let birdCurrentPosition = 30 //bird current position refers to an index


  //global variables for Riding Obstacles
  let ridingBirdClass = 'riding'


  //--GRID--//  

  //making the grid
  function createGrid(viviStartPosition) {
    for (let I = 0; I < cellCount; I++) {
      const cell = document.createElement('div')
      cell.innerText = I
      grid.appendChild(cell)
      cells.push(cell)
    }
    addVivi(viviStartPosition) // call the function to add the Vivi at the starting position

    addHome(home1Postion) // call the function to add the Home1 at its position
    addHome(home2Position) // call the function to add the Home2 at its position
    addHome(home3Position) // call the function to add the Home3 at its position
    addHome(home4Position) // call the function to add the Home4 at its position  

    addCactus(cactusStartPosition) // call the function to add the Cactus at the starting position
    addCactus(cactus2StartPosition) // call the function to add the 2nd Cactus at the starting position

    addOrc(orcStartPosition) // call the function to add the Orc at the starting position
    addOrc(orc2StartPosition) // call the function to add the Orc2 at the starting position
    addOrc(orc3StartPosition) // call the function to add the Orc3 at the starting position
    addOrc(orc4StartPosition) // call the function to add the Orc4 at the starting position
    //addOrc(orc5StartPosition) // call the function to add the Orc5 at the starting position
    //addOrc(orc6StartPosition) // call the function to add the Orc6 at the starting position
    //addOrc(orc7StartPosition) // call the function to add the Orc7 at the starting position
    //addOrc(orc8StartPosition) // call the function to add the Orc8 at the starting position

    addTomberry(tomberryStartPosition) // call the function to add the Tomberry at the starting position
    addTomberry(tomberry2StartPosition) // call the function to add the 2nd Tomberry at the starting position

    addBird(birdStartPosition) // call the function to add the Bird at the starting position

    //Move Birds here as calling the Set interval outside the function breaks them
    moveBird()



  }

  //--Adding and Removing Vivi From Grid--//

  //adding Vivi to the grid
  function addVivi(position) { // this function is reusable for different positions
    //console.log('Position Being Passed In For Vivi —>', position)
    //console.log('Cell Vivi picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(viviClass)
  }

  //removing Vivi from the grid
  function removeVivi(position) {
    cells[position].classList.remove(viviClass)
    //console.log('position', position)
    //console.log('current -->', viviCurrentPosition) 
  }

  //--Adding and Removing Home Positions From Grid--//

  //adding Home Position to the grid
  function addHome(position) {
    cells[position].classList.add(homeClass)
  }

  //removing Home position to the grid

  function removeHome(position) {
    cells[position].classList.remove(homeClass)
  }

  //adding ViviHome Position to the grid
  function addViviHome(position) {
    cells[position].classList.add(viviHomeClass)
  }

  //removing ViviHome position to the grid

  function removeViviHome(position) {
    cells[position].classList.remove(viviHomeClass)
  }


  //--Adding and Removing Obstacles From Grid--//

  //adding Cactus Obstacles to the grid
  function addCactus(position) {
    //console.log('Cell Cactus picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(cactusClass)
  }

  //removing Cactus Obstacles from the grid
  function removeCactus(position) {
    cells[position].classList.remove(cactusClass)
  }

  //adding Orc Obstacles to the grid
  function addOrc(position) {
    //console.log('Cell Orc picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(orcClass)
  }

  //removing Orc Obstacles from the grid
  function removeOrc(position) {
    cells[position].classList.remove(orcClass)
  }

  //adding Tomberry Obstacles to the grid
  function addTomberry(position) {
    //console.log('Cell Cactus picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(tomberryClass)
  }

  //removing Tomberry Obstacles from the grid
  function removeTomberry(position) {
    cells[position].classList.remove(tomberryClass)
  }

  //adding Bird Obstacles to the grid
  function addBird(position) {
    //console.log('Cell Cactus picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(birdClass)
  }

  //removing Bird Obstacles from the grid
  function removeBird(position) {
    cells[position].classList.remove(birdClass)
  }

  //--Adding and Removing Riding Obstacles From Grid--//

  function addRidingBird(position) {
    //console.log('Cell Cactus picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(ridingBirdClass)
  }

  //removing Bird Obstacles from the grid
  function removeRidingBird(position) {
    cells[position].classList.remove(ridingBirdClass)
  }




  //--Movment On The Grid--//

  //moving Vivi
  function handleKeyDown(event) {
    const key = event.keyCode
    const left = 37
    const right = 39
    const up = 38
    const down = 40
    //console.log('Position For Vivi Before Redefining --->', viviCurrentPosition)
    removeVivi(viviCurrentPosition)

    if (key === right && viviCurrentPosition % width !== width - 1) { // if the right arrow key is pressed and the Vivi is not on the right edge
      viviCurrentPosition++ // redefine Vivi’s position index to be previous position plus 1 - moves Vivi right on the Grid
    } else if (key === left && viviCurrentPosition % width !== 0) { // if the left arrow is pressed and the Vivi is not on the left edge
      viviCurrentPosition-- // redefine Vivi’s position index to be previous position minus 1 - moves Vivi left on the Grid
    } else if (key === up && viviCurrentPosition >= width) { // if the up arrow is pressed and the Vivi is not on the top row
      viviCurrentPosition -= width // redefine Vivi’s position index to be previous position minus width - position goes down an entire width value on the Grid - moves Vivi up on the Grid
    } else if (key === down && viviCurrentPosition + width <= cellCount - 1) { // if the down arrow is pressed and Vivi is not on the bottom row
      viviCurrentPosition += width  // redefine Vivi’s position index to be previous position plus width - position goes up an entire width value on the Grid - moves Vivi down on the Grid
    } else {
      console.log('invalid key used')
    }
    //shuffleAudio.play()//Play Background Music When Player First Moves
    if (viviCurrentPosition === home1Postion) { //If Vivi's position is the same as Home1 position
      homeReachedAudio.play()//Play HomeReached Music if Home is Filled 
      timeInGame = 0//timebar resets
      //console.log('score = ', score)
      score = score + 1000
      //console.log('score = ', score)
      selectScore.innerHTML = `Score: ${score}`
      if (score > highScore) { //if score is greater than highScore
        highScore = score //Make highScore equal score
        localStorage.setItem('highScore', highScore) //put this highscore as an item in the local storage
        selectHighScore.innerHTML = `HighScore: ${highScore}` //update the visual
      }
      removeVivi(viviCurrentPosition) //remove Vivi for movement
      removeHome(home1Postion) // remove the home picture in the home1 position
      addViviHome(home1Postion) // add the Vivihome picture in the home2 position
      //alert('You made it Home')

      viviCurrentPosition = viviStartPosition //reassign Vivi's position to the start position
      checkHouses()//Check if All Houses are filled

    }

    if (viviCurrentPosition === home2Position) { //If Vivi's position is the same as Home2 position
      homeReachedAudio.play()//Play HomeReached Music if Home is Filled
      timeInGame = 0//timebar resets
      score = score + 1000
      //console.log('score = ', score)
      selectScore.innerHTML = `Score: ${score}`
      //console.log('score = ', score)
      if (score > highScore) { //if score is greater than highScore
        highScore = score //Make highScore equal score
        localStorage.setItem('highScore', highScore) //put this highscore as an item in the local storage
        selectHighScore.innerHTML = `HighScore: ${highScore}` //update the visual
      }
      removeVivi(viviCurrentPosition) //remove Vivi for movement
      removeHome(home2Position) // remove the home picture in the home2 position
      addViviHome(home2Position) // add the Vivihome picture in the home2 position

      viviCurrentPosition = viviStartPosition //reassign Vivi's position to the start position
      checkHouses()//Check if All Houses are filled
    }

    if (viviCurrentPosition === home3Position) { //If Vivi's position is the same as Home3 position
      homeReachedAudio.play()//Play HomeReached Music if Home is Filled
      timeInGame = 0//timebar resets
      score = score + 1000
      //console.log('score = ', score)
      selectScore.innerHTML = `Score: ${score}`
      //console.log('score = ', score)
      if (score > highScore) { //if score is greater than highScore
        highScore = score //Make highScore equal score
        localStorage.setItem('highScore', highScore) //put this highscore as an item in the local storage
        selectHighScore.innerHTML = `HighScore: ${highScore}` //update the visual
      }
      removeVivi(viviCurrentPosition) //remove Vivi for movement
      removeHome(home3Position) // remove the home picture in the home3 position
      addViviHome(home3Position) // add the Vivihome picture in the home3 position

      viviCurrentPosition = viviStartPosition //reassign Vivi's position to the start position
      checkHouses()//Check if All Houses are filled
    }

    if (viviCurrentPosition === home4Position) { //If Vivi's position is the same as Home4 position
      homeReachedAudio.play()//Play HomeReached Music if Home is Filled
      timeInGame = 0//timebar resets
      score = score + 1000
      //console.log('score = ', score)
      selectScore.innerHTML = `Score: ${score}`
      //console.log('score = ', score)
      if (score > highScore) { //if score is greater than highScore
        highScore = score //Make highScore equal score
        localStorage.setItem('highScore', highScore) //put this highscore as an item in the local storage
        selectHighScore.innerHTML = `HighScore: ${highScore}` //update the visual
      }
      removeVivi(viviCurrentPosition) //remove Vivi for movement
      removeHome(home4Position) // remove the home picture in the home4 position
      addViviHome(home4Position) // add the Vivihome picture in the home4 position

      viviCurrentPosition = viviStartPosition //reassign Vivi's position to the start position
      checkHouses()//Check if All Houses are filled
    }



    Collision() //adds the Collision Functions For When Vivi moves into and Obstacle

    addVivi(viviCurrentPosition)
  }

  //--Moving Obstacles Left--//

  //--Moving Cactus--//


  //moving Cactus Obstacles left
  function moveCatusLeft() {
    //console.log(‘Position For Cactus Before Redefining —>’, cactusCurrentPosition)
    removeCactus(cactusCurrentPosition) //remove Cactus from current position

    if ((cactusCurrentPosition % width !== 0)) { // If Cactus is not on the left edge
      cactusCurrentPosition-- //moves Cactus left on the Grid
    } else if (cactusCurrentPosition = 80) { //if Cactus position is 80
      cactusCurrentPosition = cactusCurrentPosition + 9 //add 9 to Catcus position to move it, to make it position of 89
    } else {
      //console.log(‘cactus not working’)
    }
    // console.log(‘Position For Cactus After Redefining —>’, cactusCurrentPosition)
    addCactus(cactusCurrentPosition) //adds Cactus to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Cactus - For When Cactus moves in Vivi
  }

  function moveCatus2Left() {
    //console.log(‘Position For Cactus2 Before Redefining —>’, cactusCurrentPosition)
    removeCactus(cactus2CurrentPosition) //remove Cactus2 from current position

    if ((cactus2CurrentPosition % width !== 0)) { // If Cactus2 is not on the left edge
      cactus2CurrentPosition-- //moves Cactus2 left on the Grid
    } else if (cactus2CurrentPosition = 80) { //if Cactus2 position is 80
      cactus2CurrentPosition = cactus2CurrentPosition + 9 //add 9 to Catcus2 position to move it, to make it position of 89
    } else {
      //console.log(‘cactus2 not working’)
    }
    // console.log(‘Position For Cactus2 After Redefining —>’, cactusCurrentPosition)
    addCactus(cactus2CurrentPosition) //adds Cactus2 to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Cactus2 - For When Cactus2 moves in Vivi
  }

  //--Moving Orcs--//


  //moving Orc Obstacles left
  function moveOrcLeft() {
    //console.log(‘Position For Orc Before Redefining —>’, orcCurrentPosition)
    removeOrc(orcCurrentPosition) //remove Orc from current position

    if ((orcCurrentPosition % width !== 0)) { // If Orc is not on the left edge
      orcCurrentPosition-- //moves Orc left on the Grid
    } else if (orcCurrentPosition = 20) { //if Orc position is 20
      orcCurrentPosition = orcCurrentPosition + 9 //add 9 to Orc position to move it, to make it position of 29
    } else {
      //console.log(‘orc not working’)
    }
    // console.log(‘Position For Orc After Redefining —>’, orcCurrentPosition)
    addOrc(orcCurrentPosition) //adds Orc to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Orc - For When Orc moves in Vivi
  }

  function moveOrc2Left() {
    //console.log(‘Position For Orc2 Before Redefining —>’, orcCurrentPosition)
    removeOrc(orc2CurrentPosition) //remove Orc2 from current position

    if ((orc2CurrentPosition % width !== 0)) { // If Orc2 is not on the left edge
      orc2CurrentPosition-- //moves Orc2 left on the Grid
    } else if (orc2CurrentPosition = 20) { //if Orc2 position is 20
      orc2CurrentPosition = orc2CurrentPosition + 9 //add 9 to Orc2 position to move it, to make it position of 29
    } else {
      //console.log(‘orc not working’)
    }
    // console.log(‘Position For Orc2 After Redefining —>’, orc2CurrentPosition)
    addOrc(orc2CurrentPosition) //adds Orc2 to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Orc2 - For When Orc moves in Vivi
  }

  function moveOrc3Left() {
    //console.log(‘Position For Orc3 Before Redefining —>’, orcCurrentPosition)
    removeOrc(orc3CurrentPosition) //remove Orc3 from current position

    if ((orc3CurrentPosition % width !== 0)) { // If Orc3 is not on the left edge
      orc3CurrentPosition-- //moves Orc3 left on the Grid
    } else if (orc3CurrentPosition = 20) { //if Orc3 position is 20
      orc3CurrentPosition = orc3CurrentPosition + 9 //add 9 to Orc3 position to move it, to make it position of 29
    } else {
      //console.log(‘orc not working’)
    }
    // console.log(‘Position For Orc3 After Redefining —>’, orc3CurrentPosition)
    addOrc(orc3CurrentPosition) //adds Orc3 to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Orc3 - For When Orc3 moves in Vivi
  }

  function moveOrc4Left() {
    //console.log(‘Position For Orc4 Before Redefining —>’, orcCurrentPosition)
    removeOrc(orc4CurrentPosition) //remove Orc4 from current position

    if ((orc4CurrentPosition % width !== 0)) { // If Orc4 is not on the left edge
      orc4CurrentPosition-- //moves Orc4 left on the Grid
    } else if (orc4CurrentPosition = 20) { //if Orc4 position is 20
      orc4CurrentPosition = orc4CurrentPosition + 9 //add 9 to Orc4 position to move it, to make it position of 29
    } else {
      //console.log(‘orc not working’)
    }
    // console.log(‘Position For Orc4 After Redefining —>’, orc4CurrentPosition)
    addOrc(orc4CurrentPosition) //adds Orc4 to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Orc4 - For When Orc4 moves in Vivi
  }

  //--Moving Obstacles Right--//

  //--Moving Tomberrys--//

  //moving Tomberrys Obstacles Right
  function moveTomberryRight() {
    //console.log(‘Position For Tomberry Before Redefining —>’, tomberryCurrentPosition)
    removeTomberry(tomberryCurrentPosition) //remove Tomberry from current position

    if ((tomberryCurrentPosition % width !== width - 1)) { // If Tomberry is not on the right edge
      tomberryCurrentPosition++ //moves Tomberry right on the Grid
    } else if (tomberryCurrentPosition = 79) { //if Tomberry position is 79
      tomberryCurrentPosition = tomberryCurrentPosition - 9 // -9 to Tomberry position to move it, to make it position of 70
    } else {
      //console.log(‘tomberry not working’)
    }

    addTomberry(tomberryCurrentPosition) //adds Tomberry to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Tomberry - For When Tomberry moves in Vivi
  }

  function moveTomberry2Right() {
    //console.log(‘Position For Tomberry Before Redefining —>’, tomberryCurrentPosition)
    removeTomberry(tomberry2CurrentPosition) //remove Tomberry from current position

    if ((tomberry2CurrentPosition % width !== width - 1)) { // If Tomberry is not on the right edge
      tomberry2CurrentPosition++ //moves Tomberry right on the Grid
    } else if (tomberry2CurrentPosition = 79) { //if Tomberry position is 79
      tomberry2CurrentPosition = tomberry2CurrentPosition - 9 // -9 to Tomberry position to move it, to make it position of 70
    } else {
      //console.log(‘tomberry not working’)
    }

    addTomberry(tomberry2CurrentPosition) //adds Tomberry to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Tomberry - For When Tomberry moves in Vivi
  }

  //--Moving Bird + Riding--//


  //moving Bird Obstacles 

  //This function combines moving the Bird Left with Vivi riding the bird
  function moveBird() {
    addBird(birdStartPosition) //adding the bird in a start position
    setInterval(function () { //creating a Set Interval

      removeBird(birdCurrentPosition) //remove the bird for movement

      if (viviCurrentPosition !== birdCurrentPosition) {  //if Vivi's position is not the Same as the Bird's remove Riding class
        cells.forEach(cell => cell.classList.remove('riding')) //remove Riding Class at whatever point it is at, remove it from all cells
        birdRidingAudio.pause()//pause the bird riding music
      }

      if (viviCurrentPosition === birdCurrentPosition) { ///if Vivi's position is the same as the Bird
        shuffleAudio.pause()//pause the background music
        birdRidingAudio.play()//play the bird riding music
        //console.log('same position')
        removeBird(birdCurrentPosition) //remove the Bird class picture
        addRidingBird(birdCurrentPosition) //add the Riding class picture
        removeVivi(viviCurrentPosition) //remove Vivi class picture
        //console.log('add remove Vivi')
        removeRidingBird(birdCurrentPosition) //Remove the Riding Class for movement

        if (viviCurrentPosition === 20) { //if Vivi's position = 20
          removeRidingBird(viviCurrentPosition) //remove the riding bird class and vivi's current position to prevent falling off the side
          viviCurrentPosition = birdCurrentPosition + 10 //Set vivi position to the Bird's start to stay on the same row
          removeRidingBird(viviCurrentPosition) //remove Riding class for movement
        }
        viviCurrentPosition-- //make Vivi's position go left
        addRidingBird(viviCurrentPosition) //add Riding class to Vivi's position for movement
      }

      if (birdCurrentPosition === 20) { //if Bird position = 20
        removeBird(birdCurrentPosition) //remove Bird class to prevent falling off the side
        birdCurrentPosition = birdCurrentPosition + 10 //Set Bird position to the Bird start to stay on the same row
        removeBird(birdCurrentPosition) //remove the Bird class for movement
      }
      birdCurrentPosition-- //make the Bird go left for movement
      addBird(birdCurrentPosition)// add the Bird in the Birds current position for movment 

    }, 1000); //Move Bird, Bird Riding and Vivi Classes left at a set interval of 1 seconds
  }



  //--Collision Function--//

  //Adding Or || onto the the if Statement with everything Vivi Collides with.

  function Collision() {
    if (viviCurrentPosition === cactusCurrentPosition || viviCurrentPosition === cactus2CurrentPosition ||
      viviCurrentPosition === tomberryCurrentPosition || viviCurrentPosition === tomberry2CurrentPosition ||
      viviCurrentPosition === orcCurrentPosition || viviCurrentPosition === orc2CurrentPosition || viviCurrentPosition === orc3CurrentPosition || viviCurrentPosition === orc4CurrentPosition) {
      console.log('Collision Is Triggered')
      hitAudio.play()//Play Hit Music 
      //console.log('score = ', score)
      score = score - 200
      //console.log('score = ', score)
      if (score < 0) //Caps score to not fall Below 0
        score = 0
      selectScore.innerHTML = `Score: ${score}`

      if (lives > 0) //If Lives is greater than 0 remove a life
        lives -= 1
      selectLives.innerHTML = `Lives: ${lives}`

      removeVivi(viviCurrentPosition) //remove Vivi from his current position
      console.log('Vivi Removed')
      viviCurrentPosition = viviStartPosition //Change Vivi's Current Position back to the Start position
      console.log('Vivi current position checked')
      addVivi(viviCurrentPosition) // Add Vivi in again in his Start position
      console.log('Vivi Added To Start')
      checkLives() //Check How Many Lives Vivi Has

    }
  }

  //--Timebar Function--//

  function timeBar() {
    timeInGame++ //Time in game increases by 1 incrementally
    bar.style.gridTemplateColumns = `${timeInGame * 2.5}fr ${100 - timeInGame * 2.5}fr` //Time in game changes the value of the CSS Grid fr in the Time Bar visually - make sure to multiply the value so it's proportional to 100 fr i.e if 20 is the total time, multply time in bar by 5
    console.log(timeInGame)
    selectTimeLeft.innerHTML = `Time Left: ${40 - timeInGame}` //Make This Whatever Time You Set - Time in Game so Time Left Decreases
    if (timeInGame > 40) { //This Value Sets you the time you have before triggering losing a life/losing score
      timeOutAudio.play()//Play Timeout Music 
      timeInGame = 0 //Resets the Time Bar
      selectTimeLeft.innerHTML = `Time Left: ${40 - timeInGame}` 
      lives -= 1 //lose a life
      if (lives < 0)
        lives = 0 //Caps lives to not fall Below 0
      selectLives.innerHTML = `Lives: ${lives}`
      score = score - 200
      //console.log('score = ', score)
      if (score < 0)
        score = 0 //Caps score to not fall Below 0
      selectScore.innerHTML = `Score: ${score}`

      removeVivi(viviCurrentPosition) //remove Vivi from his current position
      console.log('Vivi Removed')
      viviCurrentPosition = viviStartPosition //Change Vivi's Current Position back to the Start position
      console.log('Vivi current position checked')
      addVivi(viviCurrentPosition) // Add Vivi in again in his Start position
      console.log('Vivi Added To Start')
      checkLives() //Check How Many Lives Vivi Has
    }
  }

  //--Reset Game Function--//

  function resetGame() {
    console.log('reset button clicked')
    //Reseting the Top Bar variables
    score = 0
    selectScore.innerHTML = `Score: ${score}`
    lives = 3
    selectLives.innerHTML = `Lives: ${lives}`
    timeInGame = 0
    selectTimeLeft.innerHTML = `Time Left: ${20 - timeInGame}`

    //Reseting Vivi's Position
    removeVivi(viviCurrentPosition) //remove Vivi from his current position 
    console.log('Vivi Removed')
    viviCurrentPosition = viviStartPosition //Change Vivi's Current Position back to the Start position
    console.log('Vivi current position checked')
    addVivi(viviCurrentPosition) // Add Vivi in again in his Start position
    console.log('Vivi Added To Start')

    //Reseting Home Pictures
    if (cells[1].classList.contains(viviHomeClass)) {
      removeViviHome(home1Postion) // remove the Vivihome picture in the home1 position
      addHome(home1Postion) // add the home back into in the home1 position
    }

    if (cells[4].classList.contains(viviHomeClass)) {
      removeViviHome(home2Position) // remove the Vivihome picture in the home2 position
      addHome(home2Position) // add the home back into in the home2 position
    }

    if (cells[5].classList.contains(viviHomeClass)) {
      removeViviHome(home3Position) // remove the Vivihome picture in the home3 position
      addHome(home3Position) // add the home back into in the home3 position
    }

    if (cells[8].classList.contains(viviHomeClass)) {
      removeViviHome(home4Position) // remove the Vivihome picture in the home3 position
      addHome(home4Position) // add the home back into in the home3 position
    }

    window.location.reload() //Refresh The Reload, to Reload the Game

  }

  //--High Score Functions--//

  //Check High Score Function

  window.onload = function highScoreCheck() { //function put into the browser window when it loads up
    let highScoreFromBrowser = localStorage.getItem('highScore') // create a new variable which gets the value from the highScore stored the local storage 
    if (highScoreFromBrowser != undefined) { //If it has a value so is Not Undefined
      highScore = highScoreFromBrowser // set high score to the high score gotten from the local storage in the broswer
      selectHighScore.innerHTML = `HighScore: ${highScore}` //display this visually
    }
  }

  //Reset High Score When Button Is Clicked

  function resetHighScore() {
    console.log(localStorage.clear()) //Enter Command into Console to Clear the Local Storage
    window.location.reload() //Refresh The Reload, to Reload the Game with the Local Storage Cleared
  }


  //--Win & Lose Game Functions--// 

  //--Check Lives Function--//

  function checkLives() {
    if (lives === 0) { //If Lives are 0 
      console.log('game over')
      shuffleAudio.pause()//Pause the Background Music
      gameOverLoseAudio.play()//Play Game Over Lose Music 
      gameOverLose() //Trigger Game Over Function
    } else {
      console.log(`you still have ${lives} left`)
    }
  }

  //--Check Houses Function--//

  function checkHouses() {
    if (cells[1].classList.contains(viviHomeClass) && cells[4].classList.contains(viviHomeClass)
    && cells[5].classList.contains(viviHomeClass) && cells[8].classList.contains(viviHomeClass)) { //If All These Cell Position Indexes Contain ViviHome Picture Class 
      console.log('We Found Vivi')
      shuffleAudio.pause()//Pause the Background Music
      gameOverWinAudio.play()//Play Game Over Lose Music
      gameOverWin() //Trigger Game Win Function
    } else {
      console.log('you have not won yet')
    }
  }

  //--Game Over Functions--//

  function gameOverLose() {
    window.alert(`Oh No Vivi! You Lost the Game! Your Score was ${score} Press Reset Game To Try Again`) // Losing Game Window Alert
  }

  function gameOverWin() {
    window.alert(`Well Done Vivi! You Won the Game! Your Score was ${score} Press Reset Game To Try Again`) // Winning Game Window Alert
  }















  //Calling Event Listeners
  document.addEventListener('keydown', handleKeyDown)
  selectReset.addEventListener('click', resetGame) //Calling Reset Function on Reset Button Click
  selectHighScoreReset.addEventListener('click', resetHighScore) //Calling ResetHighScore Function on Reset High Score Button Click
  //selectStart.addEventListener('click', playMusic)

  //--Calling Functions--//
  createGrid(viviStartPosition) // Creating the grid with Vivi in the starting position


  //--Calling Time Functions
  setInterval(timeBar, 1000)

  //Calling Movement Left Functions 
  setInterval(moveCatusLeft, 1000) //Calling the function to move cactus left at a set interval of 1 seconds
  setInterval(moveCatus2Left, 1000) //Calling the function to move cactus2 left at a set interval of 1 seconds
  setInterval(moveOrcLeft, 1000) //Calling the function to move orc left at a set interval of 1 seconds
  setInterval(moveOrc2Left, 1000) //Calling the function to move orc2 left at a set interval of 1 seconds
  setInterval(moveOrc3Left, 1000) //Calling the function to move orc3 left at a set interval of 1 seconds
  setInterval(moveOrc4Left, 1000) //Calling the function to move orc3 left at a set interval of 1 seconds

  //Calling Movement Right Functions
  setInterval(moveTomberryRight, 1000) //Calling the function to move tomberry right at a set interval of 1 seconds
  setInterval(moveTomberry2Right, 1000) //Calling the function to move tomberry2 right at a set interval of 1 seconds
}





window.addEventListener('DOMContentLoaded', init)