// GLOBAL VARIABLES
//*****************************************************************************************/
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name:"Yellow",
        value: 0
    },
};







// FUNCTIONS
//*****************************************************************************************/
// function for getting random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}    


  // Set a new Target Score (between 19 and 120)
  targetScore = getRandom(19, 120);

  // Set different values for each of the crystals (between 1 and 12)
  crystal.blue.value      = getRandom(1, 12);
  crystal.red.value       = getRandom(1, 12);
  crystal.green.value     = getRandom(1, 12);
  crystal.yellow.value    = getRandom(1, 12);  


  // Testing Console
  console.log("---------------------------------------");
  console.log("Target Score:" + targetScore);
  console.log("Blue: " + crystal.blue.value + " | Green: " +crystal.green.value + " |Red: " + crystal.red.value+ " | Yellow: " + crystal.yellow.value);
  console.log("---------------------------------------");





// MAIN PROCESSES
//*****************************************************************************************/