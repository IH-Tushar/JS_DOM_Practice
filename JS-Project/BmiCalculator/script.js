const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results'); // Corrected id

  if (height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    // Determine BMI range
    let message = `<span>Your BMI is ${bmi}. </span>`;
    
    if (bmi < 18.6) {
      message += `<span>You are Underweight.</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message += `<span>You are in the Normal Range.</span>`;
    } else {
      message += `<span>You are Overweight.</span>`;
    }
    
    // Show the message
    results.innerHTML = message;
  }
});
