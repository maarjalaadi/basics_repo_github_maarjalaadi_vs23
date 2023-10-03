const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage oma vanus: ', vanus => {
  readline.question('Sisestage oma sugu: ', sugu => {
    readline.question('Sisestage treeningu tüüp: ', trenn => {
      let maxPulss
  if(sugu == 'm' || sugu == 'M') {
    maxPulss = 220 - vanus;
  }
  if(sugu == 'n' || sugu == 'N') {
    maxPulss = 206 - 0.88 * vanus
  }
  let min
  let max
  if(trenn == '1'){
      min = 0.5 * maxPulss
      max = 0.7 * maxPulss 
  } else if(trenn == '2'){
      min = 0.7 * maxPulss
      max = 0.8 * maxPulss
  } else if(trenn == '3'){
      min = 0.8 * maxPulss
      max = 0.87 * maxPulss 
  }
console.log('Pulsisagedus peaks olema vahemikus ' + Math.round(min) + ' kuni' + ' ' + Math.round(max) + '.')
readline.close();
    })
  })
});