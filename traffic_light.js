// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

//solutions

function updateLight(current) {
  
    let ans = ['green','yellow','red'];
    if(current == ans[0]){
      return ans[1]
    } else if (current == ans[1]){
      return ans[2]
    } else {
      return ans[0]
    }
  
  }

  const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  })[current]

  function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
  }