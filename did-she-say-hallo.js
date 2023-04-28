// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish

//solutions
function validateHello(greetings) {
  res =  ['hello','ciao','salut','hallo','hola','ahoj','czesc'] 
  return res.includes(greetings)
}

//^ this doesn't work.  It only works for single words but doesn't iterate through a sentence.

function validateHello(greetings) {
   const res = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
  for (const greeting of res) {
    if (greetings.toLowerCase().includes(greeting)) {
      return true;
    }
  }
  return false;
}


const validateHello = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
