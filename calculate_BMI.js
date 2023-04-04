// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//solutions
function bmi(weight, height) {
    let ans = weight/(height**2);
    
    if(ans<18.5){
      return "Underweight"
    } else if (ans<25.0){
      return "Normal"
    } else if (ans<30.0){
      return "Overweight"
    } else {
      return 'Obese'
    }
}

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";