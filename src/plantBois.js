// BUSINESS LOGIC

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const feed = changeState("soil");
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

const hydrate = changeState("water");
const blueWater = changeState("water")(3);
const greenWater = changeState("water")(6);
const yuckyWater = changeState("water")(-3);

const giveLight = changeState("light");
const blueLight = changeState("light")(10);
const greenLight = changeState("light")(30);
const yuckyLight = changeState("light")(-10);

const storeState = () => {  
    let currentState = {};
  return (stateChangeFunction) => {   
    const newState = stateChangeFunction(currentState); 
    currentState = {...newState};   
    return newState;   
  }
}

const stateChanger = storeState();
// const feedPlant1 = stateChanger();
// const fedPlant = stateChanger(blueFood);
// const plantFedAgain = stateChanger(greenFood);
// const unFedPlant = stateChanger(yuckyFood);
// console.log(fedPlant);
// console.log(plantFedAgain);
// console.log(unFedPlant);
//new plant
const newPlant = storeState();

// const feedPlant2 = newPlant();
// const feedNewPlant = newPlant(blueFood);

// this is from plant.js whats communicating with the ui
// const feed = changeState("soil");
// const blueFood = changeState("soil")(5);


// USER LOGIC

$(document).ready(function() {
// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $('#blueFood').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });
  $('#greenFood').click(function() {
    const newState = stateChanger(greenFood);
    $('#soil-value').text(newState.soil);
  });
  $('#yuckyFood').click(function() {
    const newState = stateChanger(yuckyFood);
    $('#soil-value').text(newState.soil);
  });
  
  $('#blueWater').click(function() {
    const newState = stateChanger(blueWater);
    $('#water-value').text(newState.water);
  });
  $('#greenWater').click(function() {
    const newState = stateChanger(greenWater);
    $('#water-value').text(newState.water);
  });
  $('#yuckyWater').click(function() {
    const newState = stateChanger(yuckyWater);
    $('#water-value').text(newState.water);
  });

  $('#blueLight').click(function() {
    const newState = stateChanger(blueLight);
    $('#light-value').text(newState.light);
  });
  $('#greenLight').click(function() {
    const newState = stateChanger(greenLight);
    $('#light-value').text(newState.light);
  });
  $('#yuckyLight').click(function() {
    const newState = stateChanger(yuckyLight);
    $('#light-value').text(newState.light);
  });

  //new plant--------------------------------------------

  $('#blueFood2').click(function() {
    const newState = newPlant(blueFood);
    $('#soil-value2').text(newState.soil);
  });
  $('#greenFood2').click(function() {
    const newState = newPlant(greenFood);
    $('#soil-value2').text(newState.soil);
  });
  $('#yuckyFood2').click(function() {
    const newState = newPlant(yuckyFood);
    $('#soil-value2').text(newState.soil);
  });

  $('#blueWater2').click(function() {
    const newState = newPlant(blueWater);
    $('#water-value2').text(newState.water);
  });
  $('#greenWater2').click(function() {
    const newState = newPlant(greenWater);
    $('#water-value2').text(newState.water);
  });
  $('#yuckyWater2').click(function() {
    const newState = newPlant(yuckyWater);
    $('#water-value2').text(newState.water);
  });

  $('#blueLight2').click(function() {
    const newState = stateChanger(blueLight);
    $('#light-value2').text(newState.light);
  });
  $('#greenLight2').click(function() {
    const newState = stateChanger(greenLight);
    $('#light-value2').text(newState.light);
  });
  $('#yuckyLight2').click(function() {
    const newState = stateChanger(yuckyLight);
    $('#light-value2').text(newState.light);
  });
});
