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
// const fedPlant = stateChanger(blueFood);
// const plantFedAgain = stateChanger(greenFood);
// const unFedPlant = stateChanger(yuckyFood);
// console.log(fedPlant);
// console.log(plantFedAgain);
// console.log(unFedPlant);
//new plant
// const newPlant = storeState();
// const fedzPlant = newPlant(blueFood);

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
});