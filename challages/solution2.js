function checkSpeed(speed) {
  let speedLimit = 70;
  let kmPerDP= 5;

  if (speed <= speedLimit) {
      console.log("Ok");
  } else {

      let demeritPoints = Math.floor((speed - speedLimit) / kmPerDP);

      if (demeritPoints > 12) {
          console.log("License suspended");
      } else {
          console.log(`Points: ${demeritPoints}`);
      }
  }
}
  checkSpeed(80);  
  checkSpeed(60);  
  checkSpeed(130); 

let speed = prompt("Enter the speed of the car (in km/h):");
speed = Number(speed);
checkSpeed(speed);
