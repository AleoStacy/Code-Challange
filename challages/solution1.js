function grade(output) {
  if (output >= 79 && output <= 100) {
      alert ("A");
  } else if (output >= 60 && output <= 79) {
      alert ("B");
  } else if (output >= 49 && output <= 59) {
      alert ("C");
  } else if (output >= 40 && output <= 49) {
      alert ("D");
  } else if (output < 40 && output >= 0){
      alert("E") ;
  }
  
}
let output = prompt("Enter the student's grade (0-100):");

output = Number(output);
grade(output)

