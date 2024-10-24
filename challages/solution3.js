// Function to calculate NHIF deductions based on gross salary
function calculateNHIF(grossSalary) {
  // Reference: NHIF deductions table from provided links
  if (grossSalary <= 5999) return 150;
  if (grossSalary <= 7999) return 300;
  if (grossSalary <= 11999) return 400;
  if (grossSalary <= 14999) return 500;
  if (grossSalary <= 19999) return 600;
  if (grossSalary <= 24999) return 750;
  if (grossSalary <= 29999) return 850;
  if (grossSalary <= 34999) return 900;
  if (grossSalary <= 39999) return 950;
  if (grossSalary <= 44999) return 1000;
  if (grossSalary <= 49999) return 1100;
  if (grossSalary <= 59999) return 1200;
  if (grossSalary <= 69999) return 1300;
  if (grossSalary <= 79999) return 1400;
  if (grossSalary <= 89999) return 1500;
  if (grossSalary <= 99999) return 1600;
  return 1700; // For salaries above 100,000
}

// NSSF deductions
function calculateNSSF(grossSalary) {
  // NSSF rates (tier I and tier II)
  return Math.min(grossSalary * 0.06, 18000 * 0.06); // Max contribution capped at 1080
}

// PAYE tax based on gross salary
function calculatePAYE(grossSalary) {
  let tax = 0;
  
  // KRA tax brackets (2022 rates)
  if (grossSalary <= 24000) {
      return tax; // No tax for income below 24,000
  } else if (grossSalary <= 32333) {
      tax = (grossSalary - 24000) * 0.1;
  } else {
      tax = (8333 * 0.1) + ((grossSalary - 32333) * 0.3);
  }
  
  return tax;
}

// calculateion of salary details
function calculateSalary() {
  const basicSalary = parseFloat(document.getElementById('basicSalary').value);
  const benefits = parseFloat(document.getElementById('benefits').value);

  const grossSalary = basicSalary + benefits;
  const nssfDeductions = calculateNSSF(grossSalary);
  const nhifDeductions = calculateNHIF(grossSalary);
  const payeeTax = calculatePAYE(grossSalary);
  const netSalary = grossSalary - (nssfDeductions + nhifDeductions + payeeTax);

  // Display results
  document.getElementById('grossSalary').textContent = `Gross Salary: Ksh ${grossSalary.toFixed(2)}`;
  document.getElementById('nssfDeductions').textContent = `NSSF Deductions: Ksh ${nssfDeductions.toFixed(2)}`;
  document.getElementById('nhifDeductions').textContent = `NHIF Deductions: Ksh ${nhifDeductions.toFixed(2)}`;
  document.getElementById('payeeTax').textContent = `PAYE Tax: Ksh ${payeeTax.toFixed(2)}`;
  document.getElementById('netSalary').textContent = `Net Salary: Ksh ${netSalary.toFixed(2)}`;
}
