const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisesta ringide arv: ', ring => {
  let porgandSumma = 0
    for(let i = 1; i <= ring; i++) {
      if(i % 2 == 0){
        porgandSumma = porgandSumma + i
      }
    }
    console.log('Porgandite koguarv on ' + porgandSumma)
readline.close()
  })